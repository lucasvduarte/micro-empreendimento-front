import AppBar from '../component/appBar/AppBar.component';
import Routes from "./Routes.container";
import { Container } from '../component/container/Container';

export default function MenuC() {

    return (
        <>
            <AppBar />
            <Container margin="2%">
                <Routes />
            </Container>
        </>
    );
}
