import Redis from 'ioredis';

import { Config, ConfigName, RedisConfig } from '@core/config';

const redisConfig = <RedisConfig>Config.getConfig(ConfigName.Redis);

export const redisClient = new Redis(redisConfig);
