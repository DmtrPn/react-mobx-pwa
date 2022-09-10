export interface LogConfig  {
    main: LogCategoryConfig;
    access: LogCategoryConfig;
}

export enum LogType {
    file = 'file',
    dateFile = 'dateFile',
    console = 'console',
}

export interface LogCategoryConfig {
    type: LogType;
    filename: string;
    level: string;
    pattern?: string;
}
