import { useState, useEffect } from 'react';
import Produtc from './interfaces/Produtc';
import { useHistory } from "react-router-dom";
import { Action, ACTION_EDIT, ACTION_DELETE } from '../../component/table/interfaces/TableInterface';
import { getProdutc, deleteProdutc } from './Produtc.service';
import GridComponent from '../../component/grid/GridComponent.component';
import Table from '../../component/table/Table.component';
import ButtonLink from '../../component/buttton/ButtonLink.component';
import { useSnackbar } from '../../context/Snackbar';
import { HEAD_CELL } from './utils/HEAD_CELL';
import useModal from '../../hooks/useModal';
import ModalDelete from '../../component/modal/ModalDelete.component';

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
    }, [setSnackbar]);


    const handleClickModalDelete = (value?: string) => {
        addModal(value || '');
    };

    const handleClickAction = (action: Action, produtc: Produtc) => {
        if (action === ACTION_EDIT) {
            return history.push(`/produto/editar-produto/${produtc._id}`);
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
        <>
            <GridComponent>
                <ButtonLink title="Adicionar produto" link='produto/novo-produto' margin="0px 15px 0px 0px" />
            </GridComponent>

            <ModalDelete open={!!open} handleClick={() => handleClickModalDelete('')} onClickSubmit={handleClickDelete} title="Confirma a exclusão desse produto?" />

            <GridComponent margin="30px 0px 0px 0px">
                <Table
                    request={request}
                    data={produtc}
                    headCells={HEAD_CELL}
                    handleClickAction={handleClickAction}
                />
            </GridComponent>
        </>
    );
}
