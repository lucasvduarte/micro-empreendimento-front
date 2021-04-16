import styled from "styled-components";

export interface Props {
    select?: boolean;
    width?: string;
}

export const OptionMenu = styled.div`  
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: ${(props: Props) => `${props.select ? 900 : 600}`};
    color: #2b6cb0;
    padding: 8px 0px 3px 0px;
    transition: 0.2s ease-in;
    word-break: break-all; 
    @media (max-width: 890px) { 
        font-size: 16px; 
        transition: 0.2s ease-in;
    }
    @media (max-width: 800px) { 
        font-size: 14px;
        margin-left: 0px; 
        text-align: center;
        height: 22px;
        transition: 0.2s ease-in;
    }
    @media (max-width: 720px) { 
        height: 54px;
        transition: 0.2s ease-in;
    }
     @media (max-width: 610px) {
        height: 60px;
        transition: 0.2s ease-in;
    }
    @media (max-width: 440px) {  
        font-size: 11.9px; 
        transition: 0.2s ease-in;
    }
    :hover {
        color: #FFFFFF;
    }
`;

export const Icon = styled.div`
    margin-top: 2px;
    transition: 0.2s ease-in;
    color: #2B6CB0;
    @media (max-width: 890px) {
        margin-top: -1px;
        transition: 0.2s ease-in;
    }
    @media (max-width: 800px) {
        margin-top: -2px;
        transition: 0.2s ease-in;
    }
`;

export const Container = styled.div`   
    border-radius: 10px;
    width: 20%;
    margin: 5px 0px;
    transition: 0.2s ease-in; 
    @media (max-width: 1160px) {
        width: ${(props: Props) => `${props.width || '16%'}`};
        transition: 0.2s ease-in;
    } 
    :hover {
        background-color: rgba(66, 152, 225, 0.6); 
    } 
`;

export const Img = styled.img`
    margin-right: 2px;
    margin-bottom: -5px;
    fill: currentColor;
    width: 1em;
    height: 1.2em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    @media (max-width: 890px) {
        margin-top: 2px;
        transition: 0.2s ease-in;
    }   
`;