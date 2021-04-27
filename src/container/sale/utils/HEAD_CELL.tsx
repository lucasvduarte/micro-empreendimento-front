import { HeadCell, ACTION } from '../../../component/table/interfaces/TableInterface';

export const HEAD_CELL: Array<HeadCell> = [
    { id: 'product', label: 'Name', viewAttribute: 'name' },
    { id: 'createAt', label: 'Data da Venda', format: ['date'] },
    { id: 'qtd', label: 'Quantidade' },
    { id: 'value', label: 'Valor por unidade', viewMonetary: true },
    { id: ACTION, label: 'Ação' },
];