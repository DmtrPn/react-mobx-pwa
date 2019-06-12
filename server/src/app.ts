import 'reflect-metadata';
import { resolve } from 'path';
import * as dotenv from 'dotenv';

import { Application } from './core/application';
import { middlewares } from './components/middlewares';

dotenv.config();

const CONTROLLERS_PATH = resolve(__dirname, 'modules/**/*Controller.js');

const app = new Application();

app.init([CONTROLLERS_PATH], middlewares);
app.start();

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
