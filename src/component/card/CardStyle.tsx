import styled from "styled-components";
import Card from '@material-ui/core/Card';
import { Title } from '../title/Title';

interface ContainerInterface {
    color?: string;
    width?: string;
    padding?: string;
    margin?: string;
    minHeight?: number;
}

export const CardStyled = styled(({ color, padding, ...props }) => (
    <Card {...props} />
))`
    background-color: ${props => props.color || '#FFFFFF'} ;
    padding: ${props => `${props.padding || '0px'}`}; 
    && { 
        border-radius: 12px; 
    }
`;

export const Container = styled.div` 
    max-width: ${(props: ContainerInterface) => `${props.width || '420px'}`}; 
    margin: ${(props: ContainerInterface) => `${props.margin || '0px'}`};
    transition: 0.2s ease-in;
    @media (max-width: 460px) { 
        margin-bottom: 10px;
        transition: 0.2s ease-in;
    }
`;

export const TitleCard = styled(Title)`
    margin: 25px 0px; 
`;
