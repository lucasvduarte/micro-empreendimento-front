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
import Card from '../../component/card/Card.component';
import { INITIAL_VALUES } from './utils/INITIAL_VALUES';
import { TitleName } from '../../component/title/Title';

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
        <Center height={310} >
            <GridComponent justify="center" alignItems="center" direction="column" >
                <TitleName>Meu <span>Microempreendimento</span></TitleName>
                <Card color="rgba(255,255,255,0.2)">
                    <div style={{ padding: 40 }}>
                        <FormLogin initialValues={INITIAL_VALUES} handleSubmitForm={onSubmit} request={request} />
                    </div>
                </Card>
                <br />
                <LinkRouter to='/cadastrar' color="#2B6CB0">
                    Cadastra-se agora, crie sua conta GRATUITA
                </LinkRouter>
            </GridComponent>
        </Center>
    );
}
