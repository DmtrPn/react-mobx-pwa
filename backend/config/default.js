const path = require('path');
const {
    FRONT_SERVER_HOST,
    FRONT_SERVER_PORT,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_USER_NAME,
    REDIS_PASSWORD,
    BACKEND_HOST,
    BACKEND_PORT,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
} = process.env;

const { servicesDir } = require('./dirs.js');

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
        keyPrefix: 'dobro',
    },
    db: {
        type: 'postgres',
        host: DB_HOST || '127.0.0.1',
        port: DB_PORT || 5432,
        logging: ['warn', 'error'],
        database: DB_NAME || 'dobro',
        username: DB_USERNAME || 'gorod',
        password: DB_PASSWORD || '123qwe',
        migrationsRun: false,
        migrations: [
            path.resolve(servicesDir, './**/infrastructure/migrations/*.js'),
        ],
        entities: [
            path.resolve(servicesDir, './**/infrastructure/**/*Model.js'),
        ],
        maxQueryExecutionTime: Number(150),
        extra: { max: Number(200) },
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
