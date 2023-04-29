import { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { axios } from '../../lib/axios';

export interface IMockAxios {
    getRequestHistory: AxiosRequestConfig[];
    putRequestHistory: AxiosRequestConfig[];
    postRequestHistory: AxiosRequestConfig[];
    setOnGet(url: string | RegExp, response: object, statusCode?: number): void;
    setOnPost(url: string | RegExp, statusCode?: number): void;
    setOnPut(url: string | RegExp, statusCode?: number): void;
    reset(): void;
}

export class MockAxios implements IMockAxios {
    private static instance?: MockAxios;
    public static getInstance(): MockAxios {
        if (!this.instance) {
            this.instance = new MockAxios();
        }

        return this.instance;
    }

    private mockAdapter = new MockAdapter(axios);
    private constructor() {}

    public get getRequestHistory(): AxiosRequestConfig[] {
        return this.mockAdapter.history.get;
    }

    public get putRequestHistory(): AxiosRequestConfig[] {
        return this.mockAdapter.history.put;
    }

    public get postRequestHistory(): AxiosRequestConfig[] {
        return this.mockAdapter.history.post;
    }

    public reset(): void {
        this.mockAdapter.reset();
    }

    public setOnGet(url: string, response: object, statusCode = 200): void {
        this.mockAdapter.onGet(url).reply(statusCode, response);
    }

    public setOnPost(url: string, statusCode = 200): void {
        this.mockAdapter.onPost(url).reply(statusCode);
    }

    public setOnPut(url: string, statusCode = 200): void {
        this.mockAdapter.onPut(url).reply(statusCode);
    }
}
