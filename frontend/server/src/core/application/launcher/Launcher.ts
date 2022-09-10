import { NestExpressApplication } from '@nestjs/platform-express';

import { LoggerFactory } from '@components/logging';

import { Config, ConfigName, ServerConfig } from '../../config';

const argv = require('yargs').argv;

class Launcher {
    protected app: NestExpressApplication;

    protected config: ServerConfig;

    constructor(app: NestExpressApplication) {
        this.app = app;
        this.config = Config.getConfig<ServerConfig>(ConfigName.Server);
    }

    public launch(): void {
        this.startServer();
    }

    protected startServer(): void {
        const host = this.config.host;
        let port: number;
        port = argv.port || this.config.port;
        this.app.listen(port, host, () => {
            LoggerFactory.getLogger().info(`Server started at http://${host}:${port}`);
        });
    }
}

export { Launcher };
