import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import Grid from '../grid/GridComponent.component';
import { Center } from '../container/Container';

interface Props {
    open: boolean;
    position?: 'absolute' | 'relative' | undefined;
}

export default function Progress({ open, position }: Props) {

    return (
        <Center height={50} position={position}>
            <Grid justify="center" alignItems="center">
                <Fade in={open} unmountOnExit >
                    <CircularProgress color="primary" />
                </Fade>
            </Grid>
        </Center>
    );
}
