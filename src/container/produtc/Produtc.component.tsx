import { useState, useEffect } from 'react';
import Produtc from './interfaces/Produtc';
//import { useHistory } from "react-router-dom";
import { getProdutc } from './Produtc.service';
import GridComponent from '../../component/grid/GridComponent.component';
import Table from '../../component/table/Table.component';
import ButtonLink from '../../component/buttton/ButtonLink.component';
import { useSnackbar } from '../../context/Snackbar';
import { HEAD_CELL } from './utils/HEAD_CELL';

export default function ProdutcComponent() {

    const { setSnackbar } = useSnackbar();
    const [produtc, setProdutc] = useState<Produtc[]>([]);
    const [request, setRequest] = useState<boolean>(true);

    useEffect(() => {
        getProdutc().then(res => {
            if (res.data) {
                setProdutc(res.data);
            }
        }).catch((erro) => {
            setSnackbar({ msg: "Erro ao consultar Produtos!", type: 'error' });
        }).finally(function () {
            setRequest(false)
        });
    }, [setSnackbar]);

    return (
        <>
            <GridComponent>
                <ButtonLink title="Adicionar produto" link='produto/novo-produto' margin="0px 15px 0px 0px" />
            </GridComponent>

            <GridComponent margin="30px 0px 0px 0px">
                <Table
                    request={request}
                    data={produtc}
                    //  size={total}
                    headCells={HEAD_CELL}
                //  page={pagination.page}
                //  rowsPerPage={pagination.limit}
                // order={pagination.order === 1 ? 'asc' : 'desc'}
                // orderBy={pagination.sort}
                // noActionView
                // noActionEdit={!authentication()}
                // noActionDelete={!authentication()}
                // onChangePage={handleChangePage}
                // onChangeRowsPerPage={handleChangeRowsPerPage}
                // onRequestSort={handleRequestSort}
                // handleClickAction={handleClickAction}
                />
            </GridComponent>
        </>
    );
}
