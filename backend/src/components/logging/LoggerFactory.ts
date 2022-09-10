import * as log4js from 'log4js';

import { LogConfig, LogCategoryConfig } from './types';

import { Config, ConfigName } from '@core/config';

export class LoggerFactory {

    private static logger: log4js.Logger;

    public static getLogger(): log4js.Logger {
        if (!this.logger) {
            const loggerFactory = new LoggerFactory(Config.getConfig(ConfigName.Log) as any);
            this.logger = loggerFactory.create();
        }

        return this.logger;
    }

    protected readonly logConfig!: LogConfig;
    protected isLoggerLibInitialized = false;

    private constructor(config: LogConfig) {
        this.logConfig = config;
    }

    public create(category: string = 'app') {
        if (!this.isLoggerLibInitialized) {
            this.initializeLoggerLib();
        }

        return log4js.getLogger(category);
    }

    protected initializeLoggerLib() {
        if (this.isLoggerLibInitialized) {
            return;
        }

        log4js.configure(this.getLoggerLibConfig());
        this.isLoggerLibInitialized = true;
    }

    protected getLoggerLibConfig() {
        return {
            appenders: {
                everything: this.getAppenderFromConfig(this.logConfig.main),
                access: this.getAppenderFromConfig(this.logConfig.access),
            },
            categories: {
                default: { appenders: ['everything'], level: this.logConfig.main.level },
                db: { appenders: ['everything'], level: this.logConfig.main.level },
                access: { appenders: ['access'], level: this.logConfig.access.level },
            },
        };
    }

    protected getAppenderFromConfig(categoryConfig: LogCategoryConfig) {
        const appenderConfigMap: any = {
            file: {
                type: 'file',
                filename: categoryConfig.filename,
                maxLogSize: 50 * 1024 * 1024,
                backups: 10,
                compress: true,
            },
            dateFile: {
                type: 'dateFile',
                filename: categoryConfig.filename,
                daysToKeep: 10,
                compress: true,
            },
            console: {
                type: 'console',
            },
        };

        const appender = appenderConfigMap[categoryConfig.type];

        if (!appender) {
            throw new Error(`Appender config of type ${categoryConfig.type} is not defined`);
        }

        if (process.env.JEST_WORKER_ID) {
            appender.type = 'stdout';
        }

        if (categoryConfig.pattern) {
            appender.layout = {
                type: 'pattern',
                pattern: categoryConfig.pattern,
            };
        }

        return appender;
    }

}
