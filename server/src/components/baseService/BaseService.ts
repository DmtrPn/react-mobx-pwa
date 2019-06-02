import { AxiosInstance } from 'axios';

import { HttpClient } from '../httpClient';
import { Session } from '../../core/types';
import { Config, ConfigType, ServicesConfig } from '../../core/config';

export abstract class BaseService {
    protected axios: AxiosInstance;
    protected servicesUrl: ServicesConfig = <ServicesConfig>Config.getInstance().getConfig(ConfigType.Services);
    protected session: Session;

    protected abstract get baseUrl(): string;

    constructor(session: Session) {
        this.session = session;
        this.init();
    }

    protected init() {
        const httpClient: HttpClient = new HttpClient({
            axios: {
                baseURL: this.baseUrl,
            },
        });

        this.axios = httpClient.axios;
    }
}
