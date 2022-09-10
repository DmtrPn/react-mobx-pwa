import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { getBotToken } from 'nestjs-telegraf';

import { BotAppModule } from '../../BotAppModule';
import { LoggerFactory, BotLoggingInterceptor } from '@components/logging';
import { DbConnector } from '@core/db-connector';

export class BotApplication {

    public app: NestExpressApplication;
    private dbConnector = DbConnector.getInstance();

    public async init(): Promise<void> {
        await this.dbConnector.initialize();
        this.app = await NestFactory.create(BotAppModule, {
            logger: ['error', 'warn', 'debug'],
        });

        this.initWebHook();
        this.initLogger();
    }

    public async start(): Promise<void> {
        await this.app.listen(process.env.TB_WEBHOOK_PORT, '127.0.0.1', () => {
            LoggerFactory.getLogger().info(`Server started at http://127.0.0.1:${process.env.TB_WEBHOOK_PORT}`);
        });
    }

    protected initWebHook(): void {
        if (process.env.CURRENT_ENV !== 'dev') {
            const bot = this.app.get(getBotToken());
            this.app.use(bot.webhookCallback(`/${process.env.TB_WEBHOOK_SECRET}`));
        }
    }

    protected initLogger(): void {
        const logger = LoggerFactory.getLogger();

        this.app.useGlobalInterceptors(new BotLoggingInterceptor(logger));
    }
}
