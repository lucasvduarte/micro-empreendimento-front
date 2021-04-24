import { useState, useEffect } from 'react';
import Form from '../form/Form.component';
import { postProdutc, getByProdutc, putProdutc } from '../Produtc.service';
import { useSnackbar } from '../../../context/Snackbar';
import Produtc from '../interfaces/Produtc';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import Progress from '../../../component/progress/Progress.component';

export default function Register() {

    let history = useHistory();
    const { setSnackbar } = useSnackbar();
    const [produtc, setProdutc] = useState<Produtc>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);
    let { id } = useParams<ParamTypes>();

    useEffect(() => {
        if (id) {
            getByProdutc(id).then(res => {
                setProdutc(res.data);
            }).catch((error) => {
                console.log('Erro ao consultar comunicado!', error);
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = async (data: Produtc) => {
        try {
            await (id ? putProdutc(data) : postProdutc(data));
            setSnackbar({ msg: `Produto foi ${id ? 'atualizada' : 'cadastrada'} com sucesso!`, type: 'success' });
            history.push(`/estoque`);
        } catch (error) {
            setSnackbar({ msg: error.response.data.error, type: 'error' });
        }
    };

    if (id && request) {
        return <Progress open={request} />
    }

    return (
        <Form handleSubmitForm={onSubmit} initialValues={produtc} request={id ? request : false} />
    );
}
