import { ReactNode } from 'react';
import { OptionMenu, Container, Icon, Img } from './SideBar';
import GridComponent from '../grid/GridComponent.component';
import { LinkRouter } from '../link/Link';

interface SideBarInterface {
    to: string;
    select: string;
    text: string;
    children?: ReactNode;
    img?: string;
}

export default function SideBar({ to, select, text, children, img }: SideBarInterface) {
    const selectText: boolean = select === to.split('/')[1];
    let width: string = text.length < 17 && text.length > 12 ? '21%' : '';
    width = text.length >= 17 ? '26%' : width;
    return (
        <Container width={width || ''} >
            <LinkRouter to={to}>
                <OptionMenu select={selectText}>
                    <GridComponent justify="center" alignItems="flex-start">
                        <Icon> {!img ? children : <Img src={img} />}  </Icon>

                        {text}
                    </GridComponent>
                </OptionMenu>
            </LinkRouter>
        </Container>
    );
}
