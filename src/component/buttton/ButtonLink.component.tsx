import Button from './Button.component';
import { LinkRouter } from '../link/Link';
import { Container } from '../container/Container';
import { ButtonInterface } from './interface/Button';

interface PropsLink extends ButtonInterface {
    link: string;
}

export default function ButtonLink(props: PropsLink) {
    const { link, margin } = props;

    return (
        <Container margin={margin}>
            <LinkRouter to={link}>
                <Button {...props} type="button" />
            </LinkRouter>
        </Container>
    );
}