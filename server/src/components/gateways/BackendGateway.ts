import { LoggerFactory } from '@components/logging';
import { BackendHttpClient, BaseGatewayParams, Gateway } from '@core/http-client';

import { Config, ConfigName, ServicesConfig } from '@core/config';
import { Session } from '@core/types';

interface BackendGatewayParams extends BaseGatewayParams {
    session: Session;
}

export abstract class BackendGateway extends Gateway {
    protected abstract serviceUrl: string;
    protected logger = LoggerFactory.getLogger();
    protected configDic = <ServicesConfig>Config.getConfig(ConfigName.Services);

    constructor(params: BackendGatewayParams) {
        super(params);
    }

    protected initBackendHttpClient(): BackendHttpClient {
        const baseURL: string | undefined = this.configDic[this.name];

        if (!baseURL) {
            throw new Error(`Unknown service ${this.name}`);
        }

        return new BackendHttpClient({
            axios: { baseURL, headers: { requestId: this.requestId } },
            logger: this.logger,
        });
    }
}
