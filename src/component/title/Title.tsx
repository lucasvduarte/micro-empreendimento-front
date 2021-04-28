import styled from "styled-components";

export const Title = styled.div` 
    font-weight: 900;
    font-size: 20px;
    font-family: 'Poppins';
    color: #2b6cb0;
    transition: 0.2s ease-in;
    @media (max-width: 660px) {
        font-size: 18px;
        transition: 0.2s ease-in;
    }
`;

export const TitleName = styled.div`
    font-weight: 900;
    font-size: 28px;
    font-family: 'Poppins';
    color: black;
    line-height: 1.2px;
    transition: 0.2s ease-in;
    margin-bottom: 20px;
    @media (max-width: 660px) {
        font-size: 24px;
        transition: 0.2s ease-in;
    }
     @media (max-width: 420px) {
        font-size: 18px;
        transition: 0.2s ease-in;
    }

    & span {
        color: #2b6cb0;
    }
`;

