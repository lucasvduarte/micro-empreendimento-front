import { useState, useEffect } from 'react';
import Sale from './interfaces/Sale';
import { useHistory } from "react-router-dom";
import { Action, ACTION_EDIT, ACTION_DELETE } from '../../component/table/interfaces/TableInterface';
import { getSale, deleteSale } from './Sale.service';
import Table from '../../component/table/Table.component';
import { useSnackbar } from '../../context/Snackbar';
import { HEAD_CELL } from './utils/HEAD_CELL';
import useModal from '../../hooks/useModal';
import ModalDelete from '../../component/modal/ModalDelete.component';
import Hearder from '../../component/header/HeaderRegister.component';

export default function SaleComponent() {

    const { setSnackbar } = useSnackbar();
    let history = useHistory();
    const [sale, setSale] = useState<Sale[]>([]);
    const [request, setRequest] = useState<boolean>(true);
    const [open, addModal] = useModal();

    useEffect(() => {
        getSale().then(res => {
            if (res.data) {
                setSale(res.data);
            }
        }).catch((_error) => {
            setSnackbar({ msg: "Erro ao consultar vendas!", type: 'error' });
        }).finally(function () {
            setRequest(false)
        });
    }, [setSnackbar, request]);


    const handleClickModalDelete = (value?: string) => {
        addModal(value || '');
    };

    const handleClickAction = (action: Action, Sale: Sale) => {
        if (action === ACTION_EDIT) {
            return history.push(`/venda/editar-venda/${Sale._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(Sale._id);
        }
    };

    const handleClickDelete = async () => {
        await deleteSale(String(open)).then(res => {
            setSnackbar({ msg: "venda excluído com sucesso!", type: 'success' });
        }).catch(error => {
            setSnackbar({ msg: "Erro ao excluir venda!", type: 'error' });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };

    return (
        <Hearder name="Vendas" titleButton="Adicionar venda" link='venda/nova-venda' button >

            <ModalDelete open={!!open} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão dessa venda?" />

            <Table
                request={request}
                data={sale}
                headCells={HEAD_CELL}
                handleClickAction={handleClickAction}
                noActionView
            />
        </Hearder>
    );
}
