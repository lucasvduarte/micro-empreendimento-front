import { useState } from 'react';
import Form from '../form/Form.component';
import { postUser } from '../User.service';
import { useSnackbar } from '../../../context/Snackbar';
import User from '../interfaces/User';
import { useHistory } from "react-router-dom";
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';

export default function Register() {

    let history = useHistory();
    const { setSnackbar } = useSnackbar();
    const [User, setUser] = useState<User>(INITIAL_VALUES);
    const [request, setRequest] = useState<boolean>(false);

    const onSubmit = async (data: User) => {
        setRequest(true);
        setUser(data);
        delete data.confirmPassword;
        try {
            await postUser(data);
            setSnackbar({ msg: `Usuario foi cadastrado com sucesso!`, type: 'success' });
            history.push(`/login`);
        } catch (error) {
            setSnackbar({ msg: `Erro ao cadastrar usuario!`, type: 'error' });
        }
        setRequest(false);
    };

    return (
        <Form handleSubmitForm={onSubmit} initialValues={User} request={request} />
    );
}
