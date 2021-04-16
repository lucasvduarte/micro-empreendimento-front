import { ReactNode, MouseEvent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Container } from '../container/Container';
import Button from '../buttton/Button.component';

interface Props {
    children?: ReactNode;
    open: boolean;
    fullScreen?: boolean;
    handleClick(event: MouseEvent<HTMLElement>): void;
    size?: false | "sm" | "xs" | "md" | "lg" | "xl";
    title?: string;
    icon?: ReactNode;
}

export default function Modal({ children, open, handleClick, size, fullScreen, title, icon }: Props) {

    return (
        <>
            {title && <Button onClick={handleClick} title={title} icon={icon} />}
            <Dialog onClose={handleClick} fullWidth={true} fullScreen={fullScreen || false} maxWidth={size || 'sm'} open={open}>
                <Container margin="20px">
                    {children}
                </Container>
            </Dialog>
        </>
    );
}
