import * as express from 'express';
import * as hemlet from 'helmet';
import * as path from 'path';
import { useExpressServer } from 'routing-controllers';

import { Launcher, ClusterLauncher } from './launcher';
import { Config, ConfigType, ServerConfig } from '../config';

const PUBLIC_PATH = path.join(__dirname, '../../../../public');
const INDEX_HTML_PATH = path.join(PUBLIC_PATH, 'index.html');
const API_BASIC_URL = '/api';

class Application {

    private app: express.Application;
    private serverConfig: ServerConfig;

    constructor() {
        this.serverConfig = <ServerConfig>Config.getInstance().getConfig(ConfigType.Server);
    }

    public init(
        controllers?: Function[] | string[],
        middlewares?: Function[] | string[],
    ): void {

        this.app = express();

        this.app.use(hemlet());

        this.app.use(
            express.static(PUBLIC_PATH),
        );

        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            if (!req.url.startsWith(API_BASIC_URL)) {
                res.sendFile(INDEX_HTML_PATH);
            } else {
                next();
            }
        });

        useExpressServer(this.app, {
            controllers,
            middlewares,
            defaults: {
                undefinedResultCode: 204,
            },
            defaultErrorHandler: false,
        });

        this.app.use((req: express.Request, res: express.Response) => {
            if (req.url.startsWith(API_BASIC_URL) && !res.finished) {
                res.status(200).end(`Router ${req.url} not found`);
            }
        });
    }

    public start(): void {
        const launcher = this.createLauncher();
        launcher.launch();
    }

    protected createLauncher(): Launcher {
        return this.serverConfig.workers
            ? new ClusterLauncher(this.app)
            : new Launcher(this.app);
    }
}

export { Application };
