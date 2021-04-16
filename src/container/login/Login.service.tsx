import { http } from "../../core/http/api/Http.interceptor";
import User from './interfaces/Login';

const URL: string = '/auth/autenticacao';

export const authService = (user: User) => {
    return http.post<any>(URL, user);
}