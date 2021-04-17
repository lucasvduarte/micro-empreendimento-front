export default interface Sale {
    _id?: string;
    name: string;
    value: string;
    qtd: number | string;
    user?: any;
    createAt?: string | Date;
}