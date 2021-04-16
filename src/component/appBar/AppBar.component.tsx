import { AppBarSteled } from './AppBar';
import { Title, TitleClose } from './AppBar';
import GridComponent from '../grid/GridComponent.component';
import { Img } from '../img/Img';
import logo from "../../assets/logo/logoMinhaCenco.png";
import Toolbar from '@material-ui/core/Toolbar';
import { LinkRouter } from '../link/Link';
import { logout, getUser } from '../../core/auth/auth';

export default function MenuAppBar() {
    const name: Array<string> = getUser().name.split(" ");

    return (
        <AppBarSteled>
            <Toolbar>
                <Img src={logo} width={34} height={34} />
                <Title>
                    {`Bem vindo, ${name[0]} ${name[1]}!`}
                </Title>
                <LinkRouter to="/produto"  >
                    <GridComponent>
                        <TitleClose>Produto</TitleClose>
                    </GridComponent>
                </LinkRouter>
                <LinkRouter to="/venda" >
                    <GridComponent>
                        <TitleClose>Venda</TitleClose>
                    </GridComponent>
                </LinkRouter>
                <LinkRouter to="/login" onClick={logout}>
                    <GridComponent>
                        <TitleClose>Sair</TitleClose>
                    </GridComponent>
                </LinkRouter>
            </Toolbar>
        </AppBarSteled>
    );
}
