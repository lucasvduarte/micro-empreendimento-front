import Search from '../interfaces/Search';
let date: Date = new Date();

export const INITIAL_VALUES: Search = {
    month: date.getMonth(),
    year: date.getFullYear(),
    isMonth: true,
}

export const INITIAL_VALUES_DATA: any = {
    totalProducts: 0,
    valueProducts: 0,
    totalSale: 0,
    valueSale: 0,
    lucro: 0,
}