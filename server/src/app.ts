import 'reflect-metadata';
import { resolve } from 'path';
import { Application } from './core/application';
import { middlewares } from './components/middlewares';

const CONTROLLERS_PATH = resolve(__dirname, 'modules/**/*Controller.js');

const app = new Application();

app.init([CONTROLLERS_PATH], middlewares);
app.start();
