const appServerKey = 'BLDw1TkDOUhE3ufhvgq0jpeOjN7s0QidmKcKnqQxQ5--vlawzEYO556z5cXSsoq8uCWqp3_E6x-g2Y1UcKOU2iI';

function urlB64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export const swRegister = () => {
    let endpoint: string;
    let key: string;
    let authSecret: string;

    navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
            return registration.pushManager.getSubscription()
                .then((subscription) => {
                    return subscription
                        ? subscription
                        : registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlB64ToUint8Array(appServerKey),
                        });
                });
        }).then((subscription) => {
        // get public key for user
            const rawKey = subscription.getKey
            ? subscription.getKey('p256dh')
            : '';
            key = rawKey
                // @ts-ignore
                ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey)))
                : '';
            const rawAuthSecret = subscription.getKey
                ? subscription.getKey('auth')
                : '';
            authSecret = rawAuthSecret
                // @ts-ignore
                ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret)))
                : '';

            endpoint = subscription.endpoint;

            fetch('/api/push/register', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    key,
                    authSecret,
                    endpoint: subscription.endpoint,
                }),
            });
        // tslint:disable-next-line:ter-arrow-parens
        }).catch(error => { console.log('ERROE: ', error); });

    const ele = document.getElementById('getPush');
    ele!.onclick = function() {
        const payload = `Date: ${new Date().toUTCString()}`;
        const delay = 5;

        fetch('/api/push/notification', {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                endpoint,
                payload,
                delay,
                key,
                authSecret,
            }),
        });
    };

};
