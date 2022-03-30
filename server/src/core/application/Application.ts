import express from 'express';
import hemlet from 'helmet';
import path from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import bodyParser from 'body-parser';
import fs from 'fs';
const expressSession = require('express-session');

import { DefaultFilter } from '@components/exeptions-filters';
import { sessionConfig } from '@components/middlewares/Session';
import { LoggingInterceptor, LoggerFactory } from '@components/logging';
import { Config, ConfigName, ServerConfig } from '@core/config';

import { Launcher, ClusterLauncher } from './launcher';
import { AppModule } from '../../AppModule';

const PUBLIC_PATH = path.join(__dirname, '../../../../public');
const INDEX_HTML_PATH = path.join(PUBLIC_PATH, 'index.html');
const API_BASIC_URL = '/api';

const withHttps = process.env.CURRENT_ENV === 'development';

class Application {

    private app: NestExpressApplication;
    private serverConfig: ServerConfig;

    constructor() {
        this.serverConfig = <ServerConfig>Config.getConfig(ConfigName.Server);
    }

    public async init(): Promise<void> {
        const key = withHttps && !!process.env.SSL_KEY && fs.readFileSync(process.env.SSL_KEY); // path to *.key witch generate on Step 2 (README).
        const cert = withHttps && !!process.env.SSL_CRT && fs.readFileSync(process.env.SSL_CRT); // path to *.crt witch generate on Step 2 (README).

        this.app = await NestFactory.create(AppModule, {
            logger: ['error', 'warn', 'debug'],
            httpsOptions: withHttps && { key, cert },
        });
        this.app.use(bodyParser.json({ limit: '10mb' }));
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.setGlobalPrefix('api');

        this.app.useGlobalFilters(new DefaultFilter({ logger: LoggerFactory.getLogger() }));

        this.app.use(hemlet());

        this.initLogger();

        this.app.use(express.static(PUBLIC_PATH));
        this.app.use(expressSession(sessionConfig));

        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            if (!req.url.startsWith(API_BASIC_URL)) {
                res.sendFile(INDEX_HTML_PATH);
            } else {
                next();
            }
        });

    }

    public start(): void {
        const launcher = this.createLauncher();
        launcher.launch();
    }

    protected initLogger(): void {
        const logger = LoggerFactory.getLogger();

        this.app.useGlobalInterceptors(new LoggingInterceptor(logger));
    }

    protected createLauncher(): Launcher {
        return this.serverConfig.workers
            ? new ClusterLauncher(this.app)
            : new Launcher(this.app);
    }
}

export { Application };
