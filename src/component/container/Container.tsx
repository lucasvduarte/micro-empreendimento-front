import styled from "styled-components";

interface ContainerInterface {
    margin?: string;
}

export const Container = styled.div`  
    margin: ${(props: ContainerInterface) => `${props.margin || '0px'}`};
    transition: 0.2s ease-in;
`;

interface CenterInterface {
    width?: number;
    height?: number;
    position?: 'absolute' | 'relative' | undefined;
}

export const Center = styled.div`
    left: 50%;
    top: 50%;
    position: ${(props: CenterInterface) => props.position || 'absolute'};
    color:#fff;
    margin-left: ${(props: CenterInterface) => `-${props.width ? (props.width / 2) : '420'}px`}; /* Metade do valor da Largura */
    margin-top: ${(props: CenterInterface) => `-${props.height ? (props.height / 2) : '130'}px`}; /* Metade da valor da Altura */
    width: ${(props: CenterInterface) => `${props.width || '840'}px`}; /* Valor da Largura */
    height: ${(props: CenterInterface) => `${props.height || '260'}px`}; /* Valor da Altura */ 
    transition: 0.2s ease-in; 
    @media (max-width: 1080px) {
        margin-left: ${(props: CenterInterface) => `-${props.width ? ((props.width - 300) / 2) : '270'}px`};  
        margin-top: ${(props: CenterInterface) => `-${props.height ? (props.height / 2) : '130'}px`};  
        width: ${(props: CenterInterface) => `${props.width ? ((props.width - 300) / 2) : '540'}px`};  
        height: ${(props: CenterInterface) => `${props.height || '260'}px`};  
        transition: 0.2s ease-in;
    }
    @media (max-width: 660px) {
        margin-left: ${(props: CenterInterface) => `-${props.width ? ((props.width - 500) / 2) : '180'}px`};  
        margin-top: ${(props: CenterInterface) => `-${props.height ? (props.height / 2) : '130'}px`};  
        width: ${(props: CenterInterface) => `${props.width ? ((props.width - 500) / 2) : '360'}px`};  
        height: ${(props: CenterInterface) => `${props.height || '260'}px`};  
        transition: 0.2s ease-in;
    }
    @media (max-width: 400px) {
        margin-left: ${(props: CenterInterface) => `-${props.width ? ((props.width - 580) / 2) : '140'}px`};  
        margin-top: ${(props: CenterInterface) => `-${props.height ? (props.height / 2) : '130'}px`};  
        width: ${(props: CenterInterface) => `${props.width ? ((props.width - 580) / 2) : '280'}px`};  
        height: ${(props: CenterInterface) => `${props.height || '260'}px`};  
        transition: 0.2s ease-in;
    }
`;

