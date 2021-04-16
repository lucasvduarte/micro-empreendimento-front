import { useState } from 'react';
import { useHistory } from "react-router-dom";
import FormLogin from './form/Form.component';
import Login from './interfaces/Login';
import { useSnackbar } from '../../context/Snackbar';
import { Center } from '../../component/container/Container';
import { signIn } from '../../core/auth/auth';
import { authService } from './Login.service';

export default function LoginComponent() {

    let history = useHistory();
    const [request, setRequest] = useState(false);
    const { snackbar, setSnackbar } = useSnackbar();

    const onSubmit = async (user: Login) => {
        setRequest(true);
        await authService(user).then(res => {
            signIn(res.data);
            history.push("/");
        }).catch(error => {
            console.log(error)
            setSnackbar({ ...snackbar, msg: 'Falha na Autenticação!', type: 'error' });
        }).finally(() => {
            setRequest(false);
        });
    };

    return (
        <Center height={320}>
            <FormLogin handleSubmitForm={onSubmit} request={request} />
        </Center>
    );
}
