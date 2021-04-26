import { HeadCell, ACTION } from '../../../component/table/interfaces/TableInterface';

export const HEAD_CELL: Array<HeadCell> = [
    { id: 'name', label: 'Name' },
    { id: 'qtd', label: 'Quantidade' },
    { id: 'value', label: 'Valor', viewMonetary: true },
    { id: ACTION, label: 'Ação' },
];