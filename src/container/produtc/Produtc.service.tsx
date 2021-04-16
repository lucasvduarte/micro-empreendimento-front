import { http } from "../../core/http/api/Http.interceptor";
import Produtc from './interfaces/Produtc';

const URL: string = '/produto';

export const getProdutc = () => {
    return http.get<Produtc[]>(`${URL}`);
}

export const getByProdutc = (id: string) => {
    return http.get<Produtc>(`${URL}/${id}`);
}

export const postProdutc = (produtc: Produtc) => {
    return http.post<Produtc>(`${URL}/`, produtc);
}
export const putProdutc = (produtc: Produtc) => {
    return http.put<Produtc>(`${URL}/${produtc._id}`, produtc);
}

export const deleteProdutc = (id: string) => {
    return http.delete<string>(`${URL}/${id}`);
}
