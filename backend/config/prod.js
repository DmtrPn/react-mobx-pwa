const {
    FRONT_SERVER_HOST,
} = process.env;

module.exports = {
    server: {
        env: 'prod',
        host: FRONT_SERVER_HOST || '127.0.0.1',
    },
    db: {
        logging: ['error'],
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
