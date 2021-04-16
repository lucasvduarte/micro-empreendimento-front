import GridComponent from '../../component/grid/GridComponent.component';
import { Title } from './Dashboard';
import Grid from '@material-ui/core/Grid';

export default function Dashboard() {

    return (
        <GridComponent justify="flex-start" alignItems="center" margin="1px 0px" >
            <Grid item xs={12} >
                <Title>
                    Bem vindo(a) ao
                </Title>
                <Title>
                    Portal de Administração
                </Title>
                <Title>
                    do minhaCENCO!
                </Title>
            </Grid>
        </GridComponent>
    );
}
