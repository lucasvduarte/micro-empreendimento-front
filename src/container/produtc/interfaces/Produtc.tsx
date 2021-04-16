export default interface Produtc {
    _id?: string;
    name: string;
    value: string;
    qtd: number | string;
    isUnity?: boolean;
    user?: any;
    createAt?: string | Date;
}