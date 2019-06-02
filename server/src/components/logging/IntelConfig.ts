const intel = require('intel');

export abstract class IntelConfig {
    public get formatters(): Object {
        return {
            simple: {
                format: '[%(levelname)s] %(message)s',
                colorize: false,
            },
            details: {
                format: '%(date)s [%(levelname)s] [%(name)s] %(message)s',
                colorize: false,
            },
        };
    }

    public get loggers(): Object {
        return {
            main: {
                handlers: [this.defaultHandler],
                level: (intel as any).ALL,
            },
            express: {
                handlers: [this.defaultHandler],
                level: (intel as any).ALL,
            },
        };
    }

    public abstract get handlers(): Object;

    protected abstract get defaultHandler(): string;
}
