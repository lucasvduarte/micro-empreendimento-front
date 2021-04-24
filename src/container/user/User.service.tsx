import { http } from "../../core/http/api/Http.interceptor";
import User from './interfaces/User';

const URL: string = '/auth/registrar';

export const postUser = (user: User) => {
    return http.post<User>(`${URL}`, user);
}
