import session from 'express-session';
import connectRedis from 'connect-redis';

import { Config, ConfigName, RedisConfig } from '@core/config';

import { redisClient } from './redisClient';

const redisConfig = <RedisConfig>Config.getConfig(ConfigName.Redis);

// @ts-ignore
const RedisStore = connectRedis(session);

export const redisSessionStore = new RedisStore({
    host: redisConfig.host,
    port: redisConfig.port,
    client: redisClient as any,
});
