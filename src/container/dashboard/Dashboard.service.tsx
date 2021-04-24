import { http } from "../../core/http/api/Http.interceptor";
import Search from './interfaces/Search';

const URL: string = '/financeiro';

export const searchPost = (params?: Search) => {
    return http.get<any>(URL, { params: params })
}