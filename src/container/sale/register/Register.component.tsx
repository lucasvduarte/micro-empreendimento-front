import { useState, useEffect } from 'react';
import Form from '../form/Form.component';
import { postSale, getBySale, putSale } from '../Sale.service';
import { useSnackbar } from '../../../context/Snackbar';
import Sale from '../interfaces/Sale';
import { useParams } from "react-router";
import ParamTypes from '../../../core/interfaces/ParamTypes';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import Progress from '../../../component/progress/Progress.component';

export default function Register() {

    const { setSnackbar } = useSnackbar();
    const [sale, setSale] = useState<Sale>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(true);
    let { id } = useParams<ParamTypes>();

    useEffect(() => {
        if (id) {
            getBySale(id).then(res => {
                setSale(res.data);
            }).catch((error) => {
                console.log('Erro ao consultar comunicado!', error);
            }).finally(() => {
                setRequest(false)
            });
        }
    }, [id]);

    const onSubmit = async (data: Sale) => {
        try {
            await (id ? putSale(data) : postSale(data));
            setSnackbar({ msg: `Venda foi ${id ? 'atualizada' : 'cadastrada'} com sucesso!`, type: 'success' });
        } catch (error) {
            setSnackbar({ msg: error.response.data.error, type: 'error' });
        }
    };

    if (id && request) {
        return <Progress open={request} />
    }

    return (
        <Form handleSubmitForm={onSubmit} initialValues={sale} request={id ? request : false} />
    );
}
