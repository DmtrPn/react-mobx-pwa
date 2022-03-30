const {
    FRONT_SERVER_HOST,
    FRONT_SERVER_PORT,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_USER_NAME,
    REDIS_PASSWORD,
    BACKEND_HOST,
    BACKEND_PORT,
} = process.env;

module.exports = {
    server: {
        env: 'dev',
        host: FRONT_SERVER_HOST || '0.0.0.0',
        port: Number(FRONT_SERVER_PORT || 3000),
        cookieSecret: 'cookieSecret'
    },
    services: {
        backend: `http://${BACKEND_HOST || '127.0.0.1'}:${BACKEND_PORT || 3003}`,
    },
    redis: {
        host: REDIS_HOST || '127.0.0.1',
        port: Number(REDIS_PORT || 6379),
        username: REDIS_USER_NAME,
        password: REDIS_PASSWORD,
        keyPrefix: 'local',
    },
    log: {
        main: {
            type: 'console',
            level: 'info'
        },
        access: {
            type: 'console',
            level: 'info'
        }
    }
};
