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
                    <LinkRouter to="/" >
                        Inicio
                    </LinkRouter>
                </TitleMenu>
                <TitleMenu>
                    <LinkRouter to="/estoque"  >
                        Estoque
                    </LinkRouter>
                </TitleMenu>
                <TitleMenu>
                    <LinkRouter to="/venda" >
                        Venda
                    </LinkRouter>
                </TitleMenu>
                <Title> </Title>
                <TitleMenu>
                    {`${name[0]} ${name[1][0]}`}
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
