import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Logger } from 'log4js';

import { BackendHttpClient } from '../httpClient';

export interface BaseGatewayParams {
    requestId: string;
}

export abstract class Gateway<P extends BaseGatewayParams> {
    protected requestId: string;
    protected backendClient: BackendHttpClient;
    protected configDic: { [key: string]: string } | any;

    protected abstract logger: Logger;

    constructor({ requestId }: P) {
        this.requestId = requestId;
    }

    protected abstract get name(): string;

    protected get backendHttpClient() {
        return !this.backendClient ? this.initBackendHttpClient() : this.backendClient;
    }

    protected async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.backendHttpClient.post<T>(url, data, config);
    }

    protected async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.backendHttpClient.put<T>(url, data, config);
    }

    protected async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.backendHttpClient.get<T>(url, config);
    }

    protected async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.backendHttpClient.delete<T>(url, config);
    }

    protected abstract initBackendHttpClient(): BackendHttpClient;
}
