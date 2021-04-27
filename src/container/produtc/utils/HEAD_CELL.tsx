import { HeadCell, ACTION } from '../../../component/table/interfaces/TableInterface';

export const HEAD_CELL: Array<HeadCell> = [
    { id: 'name', label: 'Name' },
    { id: 'createAt', label: 'Data de adição', format: ['date'] },
    { id: 'qtd', label: 'Quantidade' },
    { id: 'value', label: 'Valor por unidade', viewMonetary: true },
    { id: ACTION, label: 'Ação' },
];