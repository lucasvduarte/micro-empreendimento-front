import { ReactNode } from 'react';
import { CardStyled, Container, TitleCard } from './CardStyle';
import GridComponent from '../grid/GridComponent.component';

interface Props {
    children?: ReactNode;
    color?: string;
    width?: string;
    padding?: string;
    title?: string;
}

const CardComponent = ({ children, color, width, padding, title }: Props) => {
    return (
        <Container width={width} >
            <CardStyled color={color} padding={padding} >
                <GridComponent justify="center" direction="column">
                    {title && <TitleCard>{title.toLocaleUpperCase()}</TitleCard>}
                    <div style={{ marginTop: -10 }}> {children} </div>
                </GridComponent>
            </CardStyled>
        </Container>
    )
}

export default CardComponent;
