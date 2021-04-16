import { MouseEvent } from 'react';
import Button from './Button.component';
import { Container } from '../container/Container';
import GridComponent from "../grid/GridComponent.component";
import ButtonLink from './ButtonLink.component';
import { ButtonInterface } from './interface/Button';

interface PropsLink extends ButtonInterface {
    link: string;
    onClick?(event: MouseEvent<HTMLElement>): void;
}

export default function ButtonForm({ ...props }: PropsLink) {
    const { link, onClick } = props;

    return (
        <Container margin="20px 0px">
            <GridComponent >
                {!onClick && <Button {...props} margin="0px 15px 0px 0px" />}
                {onClick && (
                    <Button type="button" margin="0px 15px 0px 0px" {...props} />
                )}

                <ButtonLink link={link || '/'} title='Voltar' color="secondary" />
            </GridComponent>
        </Container>
    );
}
