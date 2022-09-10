import { RedisOptions } from 'ioredis';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export enum ConfigName {
    Server = 'server',
    Services = 'services',
    Log = 'log',
    Redis = 'redis',
    Db = 'db',
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

export interface DbConfig extends PostgresConnectionOptions {
    type: 'postgres';
    host: string;
    database: string;
    username: string;
    password: string;
}

export type ConfigType =
    ServerConfig
    | ServicesConfig
    | RedisConfig
    | DbConfig;
