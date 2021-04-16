import Button from './Button.component';
import { Container } from '../container/Container';
import GridComponent from "../grid/GridComponent.component";
import ButtonLink from './ButtonLink.component';
import { ButtonInterface } from './interface/Button';
import Grid from '@material-ui/core/Grid';

interface PropsLink extends ButtonInterface {
    link: string;
}

export default function ButtonForm({ ...props }: PropsLink) {
    const { link } = props;

    return (
        <Container margin="18px 0px 10px 0px">
            <GridComponent spacing={2}>
                <Grid item xs={6}>
                    <Button type="button" fullWidth {...props} />
                </Grid>
                <Grid item xs={6}>
                    <ButtonLink link={link || '/'} title='Voltar' color="secondary" fullWidth />
                </Grid>
            </GridComponent>
        </Container>
    );
}
