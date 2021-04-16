import styled from "styled-components";

export interface Props {
    width?: number;
    height?: number;
    borderRadius?: number;
    margin?: string;
}

export const Img = styled.img`
    width: ${(props: Props) => `${props.width || 200}px`}; 
    height: ${(props: Props) => `${props.height || 150}px`};
    margin:${(props: Props) => `${props.margin || '0px'}`};
    border-radius: ${(props: Props) => `${props.borderRadius || 0}px`};
`;