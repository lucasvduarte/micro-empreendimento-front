import { ReactNode } from 'react';
import { CardStyled, Container, TitleCard } from './CardStyle';

interface Props {
    children?: ReactNode;
    color?: string;
    width?: string;
    padding?: string;
    title?: string;
    margin?: string;
}

const CardComponent = ({ children, color, width, padding, title, margin }: Props) => {
    return (
        <Container width={width} margin={margin} >
            <CardStyled color={color} padding={padding} >
                {title && <TitleCard>{title.toLocaleUpperCase()}</TitleCard>}
                {children}
            </CardStyled>
        </Container>
    )
}

export default CardComponent;
