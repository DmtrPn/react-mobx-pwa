import axios, { AxiosResponse } from 'axios';

// Make base url for server and client
/* eslint-disable @typescript-eslint/dot-notation */
// @ts-ignore
const BASE_URL: string = typeof window !== 'undefined' && window['BASE_URL'] ? window['BASE_URL'] : '';

const instance = axios.create({
    baseURL: BASE_URL,
});

instance.defaults.headers = {
    // @ts-ignore
    'Cache-Control': 'cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
};

instance.interceptors.response.use(
    response => response,
    error => {
        let errorData = error.response?.data ?? error.data ?? error;
        errorData = errorData.data?.code ? errorData.data : errorData;

        const result = new Error(errorData.message);
        result.name = errorData.code ? errorData.code : error.name;
        return Promise.reject(result);
    },
);

export { instance, AxiosResponse };
