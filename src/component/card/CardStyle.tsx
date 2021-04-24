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
    min-height: 120px;
    && { 
        border-radius: 12px;
        @media (max-width: 600px) {
            padding: 0px 1px 10px 1px;
        }
    }
`;

export const Container = styled.div` 
    max-width: ${(props: ContainerInterface) => `${props.width || '420px'}`}; 
    margin:  0px 0px 20px 0px;
    transition: 0.2s ease-in;
    @media (max-width: 600px) { 
        margin-bottom: 0px; 
        transition: 0.2s ease-in;
    }
`;

export const TitleCard = styled(Title)`
    margin: 25px 0px;
    text-align: center;
`;
