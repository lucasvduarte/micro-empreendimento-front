import axios from 'axios';
import { getUser } from '../../auth/auth';
import { Response } from '../../auth/Response';

const TIMEOUT_ERROR_MESSAGE = 'timeoutErrorMessage';

axios.defaults.timeout = 20000;
axios.defaults.timeoutErrorMessage = TIMEOUT_ERROR_MESSAGE;

let instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
    async (config) => {
        const user: Response = getUser();
        if (user && user.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error) => {

        return Promise.reject(error);
    }
);

export const http = instance;
