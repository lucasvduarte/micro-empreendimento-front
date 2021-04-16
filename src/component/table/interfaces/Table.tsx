import { ReactNode, MouseEvent, ChangeEvent } from 'react';
import { Action, HeadCell, Order } from './TableInterface';

export interface TableProps {
    data: Object[];
    headCells: HeadCell[];
    children?: ReactNode;
    page?: number;
    size?: number;
    rowsPerPage?: number;
    order?: Order;
    orderBy?: string;
    actionColumns?: number;
    request?: boolean;
    noActionDelete?: boolean;
    noActionEdit?: boolean;
    noActionView?: boolean;
    noTable?: boolean;
    editable?: boolean;
    onChangePage?(event: unknown, newPage: number): void;
    onChangeRowsPerPage?(event: ChangeEvent<HTMLInputElement>): void;
    onRequestSort?(event: MouseEvent<unknown>, property: string): void;
    handleClickAction?(action: Action, value: Object, index?: number): void;
}