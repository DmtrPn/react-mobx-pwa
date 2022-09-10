import { AxiosRequestConfig, AxiosPromise } from 'axios';

import { HttpClient } from './HttpClient';

export class BackendHttpClient extends HttpClient {
    public post<T = any>(url: string, data_: any = {}, config_: AxiosRequestConfig = { data: {} }): AxiosPromise<T> {
        // @ts-ignore
        return this.axios.post.apply(this, arguments);
    }

    public put<T = any>(url: string, data_: any = {}, config_: AxiosRequestConfig = { data: {} }): AxiosPromise<T> {
        // @ts-ignore
        return this.axios.put.apply(this, arguments);
    }

    public get<T = any>(url_: string, config_?: AxiosRequestConfig): AxiosPromise<T> {
        // @ts-ignore
        return this.axios.get.apply(this, arguments);
    }

    public delete<T = any>(url_: string, config_?: AxiosRequestConfig): AxiosPromise<T> {
        // @ts-ignore
        return this.axios.delete.apply(this, arguments);
    }
}
