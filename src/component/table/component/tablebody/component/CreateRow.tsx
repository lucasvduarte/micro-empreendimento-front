import { HeadCell, ACTION } from '../../../interfaces/TableInterface';

export function createRow(columnsList: HeadCell[]): HeadCell[] {
    if (columnsList[columnsList.length - 1].id === ACTION) {
        columnsList.pop();
    }

    return columnsList;
}