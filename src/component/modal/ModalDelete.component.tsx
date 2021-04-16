import { ReactNode, MouseEvent } from 'react';
import { Span } from './ModalStyle';
import Modal from './Modal.component';
import Button from '../../component/buttton/Button.component';
import { Container } from '../container/Container';
import GridComponent from "../grid/GridComponent.component";

interface Props {
    children?: ReactNode;
    open: boolean;
    handleClick(event: MouseEvent<HTMLElement>): void;
    onClickSubmit(event: MouseEvent<HTMLElement>): void;
    title: string;
}

export default function ModalDelete({ open, title, handleClick, onClickSubmit }: Props) {

    return (
        <Modal open={open} handleClick={handleClick} >
            <Span>{title.toLocaleUpperCase()}</Span>
            <GridComponent margin="20px 0px 0px 0px" justify="flex-end">
                <Container margin="0px 20px 0px 0px">
                    <Button type="button" title='Não' onClick={handleClick} color="secondary" />
                </Container>
                <Button title='Sim' onClick={onClickSubmit} />
            </GridComponent>
        </Modal>
    );
}
