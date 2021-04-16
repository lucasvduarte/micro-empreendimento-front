export default interface Produtc {
    _id?: string;
    name: string;
    value: number;
    qtd: number;
    isUnity?: boolean;
    user?: any;
    createAt?: string | Date;
}