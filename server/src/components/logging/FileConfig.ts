import * as LogStream from 'logrotate-stream';
const intel = require('intel');

import { TerminalConfig } from './TerminalConfig';

export class FileConfig extends TerminalConfig {
    public get handlers(): Object {
        return {
            ...super.handlers,
            file: {
                class: (intel as any).handlers.Stream,
                formatter: 'details',
                level: (intel as any).ALL,
                stream: LogStream({
                    file: `/opt/logs/project.log`,
                    size: '50m',
                    keep: 5,
                }),
            },
        };
    }

    protected get defaultHandler(): string {
        return 'file';
    }
}
