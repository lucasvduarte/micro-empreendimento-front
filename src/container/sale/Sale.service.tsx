import { http } from "../../core/http/api/Http.interceptor";
import Sale from './interfaces/Sale';

const URL: string = '/venda';

export const getSale = () => {
    return http.get<Sale[]>(`${URL}`);
}

export const getBySale = (id: string) => {
    return http.get<Sale>(`${URL}/${id}`);
}

export const postSale = (sale: Sale) => {
    return http.post<Sale>(`${URL}/`, sale);
}
export const putSale = (sale: Sale) => {
    return http.put<Sale>(`${URL}/${sale._id}`, sale);
}

export const deleteSale = (id: string) => {
    return http.delete<string>(`${URL}/${id}`);
}
