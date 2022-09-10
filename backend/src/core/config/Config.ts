import config  from 'config';

import { ConfigName, ConfigType } from './types';

export class Config {
    public static getConfig<T = ConfigType>(type: ConfigName): T {
        return config.has(type) ? config.get(type) : {} as T;
    }
}
