import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { Logger } from 'log4js';

export interface BaseHttpClientParams {
    axios: AxiosRequestConfig;
    logger: Logger;
}

export abstract class HttpClient {
    public axios: AxiosInstance;
    protected logger: Logger;

    constructor(params: BaseHttpClientParams) {
        this.axios = axios.create(params.axios);
        this.logger = params.logger;

        /*
         Add a request interceptor
         */
        this.axios.interceptors.request.use(
            this.actionsBeforeRequestSending.bind(this),
            this.actionsAfterRequestError.bind(this),
        );

        /*
         Add a response interceptor
         */
        this.axios.interceptors.response.use(
            this.actionsBeforeResponseHandle.bind(this),
            this.actionsAfterResponseError.bind(this),
        );
    }

    public actionsBeforeRequestSending(config: AxiosRequestConfig): AxiosRequestConfig {
        /*
         Configurate response params
         */
        return config;
    }

    public actionsAfterRequestError(error: AxiosError) {
        /*
         Configurate request error logging
         */
        this.logger.warn(error);
        return Promise.reject(error);
    }

    public actionsBeforeResponseHandle(response: AxiosResponse): AxiosResponse {
        /*
        Configurate response
         */
        return response;
    }

    public actionsAfterResponseError(error: AxiosError) {
        /*
         Configurate response error logging
         */
        if (error.response) {
            this.logger.debug(
                `${error}
Method: ${error.response.config.method}
Url: ${error.response.config.url}
Response data: ${JSON.stringify(error.response.data)}`,
            );
        } else if (error.config) {
            this.logger.warn(`Method: ${error.config.method}\nUrl: ${error.config.url}`);
        } else {
            this.logger.warn(`Error: ${error}`);
        }
        return Promise.reject(error);
    }
}
