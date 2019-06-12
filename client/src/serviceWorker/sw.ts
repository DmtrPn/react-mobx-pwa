const CACHE_NAME = 'static-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/app.js',
    '/styles.css',
];

// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', (event: any) => {
    console.log('[ServiceWorker] Install ', new Date());
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        }),
    );
});

self.addEventListener('activate', (event: any) => {
    console.log('[ServiceWorker] Activate');
    // Remove previous cached data from disk.
    event.waitUntil(
        caches.keys().then((keyList) => {
            // @ts-ignore
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        }),
    );
    // @ts-ignore
    self.clients.claim();
});

self.addEventListener('fetch', (event: any) => {
    if (event.request.url.includes('/api/') && !event.request.url.includes('/api/push')) {
        event.respondWith(
            caches.open(DATA_CACHE_NAME).then((cache) => {
                return fetch(event.request)
                    .then((response) => {
                        // If the response was good, clone it and store it in the cache.
                        if (response.status === 200) {
                            cache.put(event.request.url, response.clone());
                        }
                        return response;
                    }).catch((err) => {
                        // Network request failed, try to get it from the cache.
                        return cache.match(event.request);
                    });
            }));
        return;
    }
    event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[CINS] Fetch', event.request.url);
            return cache.match(event.request)
                .then((response) => {
                    return response || fetch(event.request);
                });
        }),
    );

});

self.addEventListener('push', (event: any) => {
    const body = event.data ? event.data.text() : 'PUSH';
    event.waitUntil(
        // @ts-ignore
        self.registration.showNotification('My first push', {
            body,
        }),
    );
});

self.addEventListener('notificationclick', (event: any) => {
    // close the notification
    event.notification.close();
});
