import { AppBarSteled } from './AppBar';
import { Title, TitleClose, TitleMenu } from './AppBar';
import GridComponent from '../grid/GridComponent.component';
import Toolbar from '@material-ui/core/Toolbar';
import { LinkRouter } from '../link/Link';
import { logout, getUser } from '../../core/auth/auth';

export default function MenuAppBar() {
    const name: Array<string> = getUser().name.split(" ");

    return (
        <AppBarSteled>
            <Toolbar>
                <TitleMenu>
                    <LinkRouter to="/produto"  >
                        Produto
                    </LinkRouter>
                </TitleMenu>
                <TitleMenu>
                    <LinkRouter to="/venda" >
                        Venda
                    </LinkRouter>
                </TitleMenu>
                <TitleMenu>
                    <LinkRouter to="/financeiro" >
                        Financeiro
                    </LinkRouter>
                </TitleMenu>
                <Title> </Title>
                <TitleMenu>
                    {`Bem vindo, ${name[0]} ${name[1]}!`}
                </TitleMenu>
                <LinkRouter to="/login" onClick={logout}>
                    <GridComponent>
                        <TitleClose>Sair</TitleClose>
                    </GridComponent>
                </LinkRouter>
            </Toolbar>
        </AppBarSteled>
    );
}
