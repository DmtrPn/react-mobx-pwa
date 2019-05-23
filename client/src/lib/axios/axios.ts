import axios from 'axios';
import { AxiosResponse } from 'axios';

// Make base url for server and client
const BASE_URL: string =  typeof window != 'undefined' ? '' : 'http://0.0.0.0:3001/';

const instance = axios.create({
    baseURL: BASE_URL
});

export { instance, AxiosResponse };
