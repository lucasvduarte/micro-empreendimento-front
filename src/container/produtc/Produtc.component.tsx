import { useState, useEffect } from 'react';
import Produtc from './interfaces/Produtc';
import { useHistory } from "react-router-dom";
import { Action, ACTION_EDIT, ACTION_DELETE } from '../../component/table/interfaces/TableInterface';
import { getProdutc, deleteProdutc } from './Produtc.service';
import Table from '../../component/table/Table.component';
import { useSnackbar } from '../../context/Snackbar';
import { HEAD_CELL } from './utils/HEAD_CELL';
import useModal from '../../hooks/useModal';
import ModalDelete from '../../component/modal/ModalDelete.component';
import Hearder from '../../component/header/HeaderRegister.component';

export default function ProdutcComponent() {

    const { setSnackbar } = useSnackbar();
    let history = useHistory();
    const [produtc, setProdutc] = useState<Produtc[]>([]);
    const [request, setRequest] = useState<boolean>(true);
    const [open, addModal] = useModal();

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
    }, [setSnackbar, request]);


    const handleClickModalDelete = (value?: string) => {
        addModal(value || '');
    };

    const handleClickAction = (action: Action, produtc: Produtc) => {
        if (action === ACTION_EDIT) {
            return history.push(`/estoque/editar-produto/${produtc._id}`);
        }
        if (action === ACTION_DELETE) {
            return handleClickModalDelete(produtc._id);
        }
    };

    const handleClickDelete = async () => {
        await deleteProdutc(String(open)).then(res => {
            setSnackbar({ msg: "Produto excluído com sucesso!", type: 'success' });
        }).catch(error => {
            setSnackbar({ msg: "Erro ao excluir produto!", type: 'error' });
        }).finally(function () {
            setRequest(true);
            handleClickModalDelete('');
        });
    };

    return (
        <Hearder name="Produtos" titleButton="Adicionar produto" link='estoque/novo-produto' button >
            <ModalDelete open={!!open} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão desse produto?" />

            <Table
                request={request}
                data={produtc}
                headCells={HEAD_CELL}
                handleClickAction={handleClickAction}
                noActionView
            />
        </Hearder>
    );
}
