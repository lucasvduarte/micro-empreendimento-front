export interface ResponsePagination {
    data: Array<any>;
    lastPage: number;
    page: number;
    perPage: number;
    total: number;
}