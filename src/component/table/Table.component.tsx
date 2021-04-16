import Table from '@material-ui/core/Table';
import TableBody from './component/tablebody/TableBody.component';
import TableHead from './component/tablehead/TableHead.component';
import { PaperComponent, TableContainerStyled } from './component/Table';
import Progress from '../progress/Progress.component';
import { TableProps } from './interfaces/Table';
import TablePagination from './component/pagination/TablePagination.component';

function TableComponent(props: TableProps) {

    const { size, request, page, noTable, children } = props;

    if (request) {
        return <Progress open={request} position="relative" />
    }

    return (
        <PaperComponent>
            {!noTable && (
                <TableContainerStyled>
                    <Table aria-labelledby="tableTitle" aria-label="enhanced table" >
                        <TableHead {...props} />
                        <TableBody {...props} />
                    </Table>
                </TableContainerStyled>
            )}

            {children}

            { page && <TablePagination page={page} rowsPerPage={30} size={size} {...props} />}
        </PaperComponent>
    );
}

export default TableComponent;