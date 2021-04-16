import styled from "styled-components";

export interface Props {
    backgroundColor?: string;
}

export const SnackBarStyled = styled.div`  
    background-color:${(props: Props) => `${props.backgroundColor || '#fff'}`}; 
    padding: 14px 16px;
    font-size: 0.925rem ;
    font-weight: 500;
    line-height: 1.43; 
    border-radius: 12px;
    letter-spacing: 0.01071em;
    color: #fff;
    min-width: 200px;
    max-width: 320px;
    transition: 0.2s ease-in; 
    @media (max-width: 600px) {  
        max-width: 280px;
        padding: 10px 12px;
        transition: 0.2s ease-in;
    }
`;