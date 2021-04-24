import { useState } from 'react';
import { useHistory } from "react-router-dom";
import FormLogin from './form/Form.component';
import Login from './interfaces/Login';
import { useSnackbar } from '../../context/Snackbar';
import { Center } from '../../component/container/Container';
import { signIn } from '../../core/auth/auth';
import { authService } from './Login.service';
import { LinkRouter } from '../../component/link/Link';
import GridComponent from '../../component/grid/GridComponent.component';
import Typography from '@material-ui/core/Typography';

export default function LoginComponent() {

    let history = useHistory();
    const [request, setRequest] = useState(false);
    const { setSnackbar } = useSnackbar();

    const onSubmit = async (user: Login) => {
        setRequest(true);
        await authService(user).then(res => {
            signIn(res.data);
            history.push("/");
        }).catch(error => {
            console.log(error)
            setSnackbar({ msg: 'Falha na Autenticação!', type: 'error' });
        }).finally(() => {
            setRequest(false);
        });
    };

    return (
        <Center height={320}>
            <FormLogin handleSubmitForm={onSubmit} request={request} />
            <br />
            <br />
            <GridComponent justify="center" alignItems="center" >
                <LinkRouter to='/cadastrar' color="#2B6CB0">
                    Não possui login?   <Typography variant="h6">Cadastrar</Typography>
                </LinkRouter>
            </GridComponent>
        </Center>
    );
}
