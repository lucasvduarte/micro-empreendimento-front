
export default interface Sale {
    _id?: string;
    product?: any;
    value: string;
    qtd: number | string;
    user?: any;
    createAt?: string | Date;
}