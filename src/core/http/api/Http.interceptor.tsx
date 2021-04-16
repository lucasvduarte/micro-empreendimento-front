import axios from 'axios';
import { useSnackbar } from '../../../context/Snackbar';
import { getUser } from '../../auth/auth';
import { Response } from '../../auth/Response';

const TIMEOUT_ERROR_MESSAGE = 'timeoutErrorMessage';

axios.defaults.timeout = 20000;
axios.defaults.timeoutErrorMessage = TIMEOUT_ERROR_MESSAGE;

let instance = axios.create({
    baseURL: 'http://localhost:4000',
});

instance.interceptors.request.use(
    async (config) => {
        const user: Response = getUser();
        console.log(user)
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
        /*   const { snackbar, setSnackbar } = useSnackbar();
  
          if (error.message === TIMEOUT_ERROR_MESSAGE || error.code === 'ECONNABORTED') {
              setSnackbar({ ...snackbar, msg: "Tempo de requisição limite excedido!", type: 'error' });
  
          } else if (error) {
              setSnackbar({ ...snackbar, msg: "Erro Interno. Por favor, contate o administrador!", type: 'error' });
          } */

        return Promise.reject(error);
    }
);

export const http = instance;
