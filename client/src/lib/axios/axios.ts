import axios from 'axios';
import { AxiosResponse } from 'axios';

// Make base url for server and client
const BASE_URL: string =  (typeof window != 'undefined' && window['BASE_URL'])
    ? window['BASE_URL']
    : '';

const instance = axios.create({
    baseURL: BASE_URL
});

export { instance, AxiosResponse };
