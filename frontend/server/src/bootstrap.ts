import 'reflect-metadata';
import 'source-map-support/register';
import dotenv from 'dotenv';

const tsConfig = require('../tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

dotenv.config();

/* Path mapping init, must be before import app files */
tsConfigPaths.register({
    baseUrl: __dirname,
    paths: tsConfig.compilerOptions.paths,
});

function padDatePart(str: number) {
    return (`0${str}`).slice(-2);
}

function consoleErrorTimestamp(message: any) {
    const now = new Date();
    console.error(
        /* tslint:disable:max-line-length */
        `${now.getFullYear()}-${padDatePart(now.getMonth() + 1)}-${padDatePart(now.getDate())} ${padDatePart(
            now.getHours(),
        )}:${padDatePart(now.getMinutes())}:${padDatePart(now.getSeconds())}`,
        /* tslint:enable:max-line-length */
        message,
    );
}

process.on('uncaughtException', (err) => {
    consoleErrorTimestamp(err);
});

process.on('unhandledRejection', (reason: any, p) => {

    if (reason.error) {
        const { error } = reason;
        if (error.response) {
            console.warn(`${error}
Method: ${error.response.config.method}
Url: ${error.response.config.url}
Response data: ${JSON.stringify(error.response.data)}`);
        } else if (error.config) {
            console.warn(`Method: ${error.config.method}\nUrl: ${error.config.url}`);
        } else if (error.data) {
            console.warn(`ERROR DATA: ${error.data}`);
        } else {
            console.warn(`Error: ${error}`);
        }
    } else {
        console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    }
});

if (!process.env.CURRENT_ENV) {
    process.env.CURRENT_ENV = 'dev';
}
