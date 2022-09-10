const Amplitude = require('@amplitude/node');

const client = Amplitude.init('f16f85b3f4459dd57bd5fb3ca03885fe');

client.logEvent({
    event_type: 'Node.js Event',
    user_id: 'datamonster@gmail.com',
    location_lat: 37.77,
    location_lng: -122.39,
    ip: '127.0.0.1',
    event_properties: {
        keyString: 'valueString',
        keyInt: 11,
        keyBool: true,
    },
});
