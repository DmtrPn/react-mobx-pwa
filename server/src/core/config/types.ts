import { RedisOptions } from 'ioredis';

export enum ConfigName {
    Server = 'server',
    Services = 'services',
    Log = 'log',
    Redis = 'redis',
    Google = 'google',
    Configuration = 'configuration',
    Sip = 'sip',
    Openid = 'openid',
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

export interface GoogleConfig {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
}

export interface ConfigurationConfig {
    loggedInTimeout: number;
}

export interface SipConfig {
    sipuri: string;
    password: string;
    websocket: string;
}

export interface OpenidConfig {
    issuerBaseUrl: string;
    issuerLogoutUrl: string;
    clientId: string;
    clientSecret: string;
    scope: string;
    loginRedirectUri: string;
    logoutRedirectUri: string;
    responseType: string;
}

export type ConfigType =
    ServerConfig
    | ServicesConfig
    | RedisConfig
    | ConfigurationConfig
    | GoogleConfig
    | SipConfig
    | OpenidConfig;
