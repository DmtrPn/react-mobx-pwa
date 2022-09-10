const {
    SIP_URI,
    SIP_PASSWORD,
    SIP_WEBSOCKET,
    ASTERISK_HOST,
    ASTERISK_PORT,
    REDIS_HOST,
    REDIS_MASTER_SET,
    REDIS_USER_NAME,
    REDIS_PASSWORD,
    REDIS_PORT,
} = process.env;

module.exports = {
    server: {
        env: 'prod'
    },
    log: {
        main: {
            pattern: '%p %m'
        },
        access: {
            pattern: '%p %m'
        }
    }
};
