import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Logger } from 'log4js';

import { BackendHttpClient } from '../httpClient';

export interface BaseGatewayParams {
    requestId: string;
}

export abstract class Gateway {
    protected requestId: string;
    protected backendClient: BackendHttpClient;
    protected configDic: { [key: string]: string } | any;

    protected abstract logger: Logger;

    constructor({ requestId }: BaseGatewayParams) {
        this.requestId = requestId;
    }

    protected abstract get name(): string;

    protected get backendHttpClient() {
        return !this.backendClient ? this.initBackendHttpClient() : this.backendClient;
    }

    protected async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return await this.backendHttpClient.post<T>(url, data, config);
    }

    protected async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return await this.backendHttpClient.put<T>(url, data, config);
    }

    protected async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return await this.backendHttpClient.get<T>(url, config);
    }

    protected async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return await this.backendHttpClient.delete<T>(url, config);
    }

    protected abstract initBackendHttpClient(): BackendHttpClient;
}
