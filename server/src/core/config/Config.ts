import { ConfigDictionary, ConfigType } from './types';

import * as baseConfig from '../../config/base';
import * as devConfig from '../../config/dev';
import * as prodConfig from '../../config/prod';

const DEFAULT_ENV = 'prod';

export class Config {

    private static instance: Config;
    protected configDir: string;
    protected env: string;
    protected configDic: ConfigDictionary;

    private constructor() {
        this.env = this.defineEnv();
        this.configDic = this.initConfigDic(this.env);
    }

    public static getInstance(): Config {
        if (!this.instance) {
            this.instance = new Config();
        }

        return this.instance;
    }

    public getConfig(type: ConfigType) {
        return this.configDic[type];
    }

    protected defineEnv(): string {
        let env = process.env.WTG_ENV;

        if (!env) {
            env = DEFAULT_ENV;
        }

        return env;
    }

    protected initConfigDic(env: string): ConfigDictionary {
        const configDic: ConfigDictionary | any = {};
        configDic[ConfigType.Server] = Object.assign(
                baseConfig.server,
                devConfig.server,
                env === 'prod' ? prodConfig.server : {},
            );

        configDic[ConfigType.Services] = Object.assign(
                baseConfig.service,
                devConfig.service,
                env === 'prod' ? prodConfig.service : {},
            );

        return configDic;
    }
}
