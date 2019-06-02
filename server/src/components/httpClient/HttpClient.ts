import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import * as Loggers from  '../logging';

interface HttpClientParams {
    axios: AxiosRequestConfig;
}

export class HttpClient {
    public axios: AxiosInstance;

    constructor(params?: HttpClientParams) {

        this.axios = Axios.create(params.axios);

        /*
         Add a request interceptor
         */
        this.axios.interceptors.request.use(
            this.actionsBeforeRequestSending.bind(this),
            this.actionsAfterRequestError.bind(this));

        /*
         Add a response interceptor
         */
        this.axios.interceptors.response.use(
            this.actionsBeforeResponseHandle.bind(this),
            this.actionsAfterResponseError.bind(this));
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
        Loggers.Express.warn(error);
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
            Loggers.Express.debug(
                `${error}
                ${error.response.config.method}
                Url: ${error.response.config.url}
                Response data: ${JSON.stringify(error.response.data)}`,
            );
        } else {
            Loggers.Express.warn(`Method: ${error.config.method}
                Url: ${error.config.url}`);
        }
        return Promise.reject(error);
    }

}
