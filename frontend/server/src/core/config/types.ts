import { RedisOptions } from 'ioredis';

export enum ConfigName {
    Server = 'server',
    Services = 'services',
    Log = 'log',
    Redis = 'redis',
}

export interface ServerConfig {
    env: string;
    host: string;
    port: number;
    workers?: number;
    cookieSecret?: string;
}

export interface ServicesConfig {
    backend: string;
    lab: string;
    site: string;
    asterisk: string;
}

export interface RedisConfig extends RedisOptions {
    host: string;
    port: number;
}

export type ConfigType =
    ServerConfig
    | ServicesConfig
    | RedisConfig;
