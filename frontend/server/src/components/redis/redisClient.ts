import Redis from 'ioredis';

import { Config, ConfigName, RedisConfig } from '@core/config';

const redisConfig = Config.getConfig<RedisConfig>(ConfigName.Redis);

export const redisClient = new Redis(redisConfig);
