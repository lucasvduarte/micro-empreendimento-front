import styled from "styled-components";

export const Title = styled.div`
    font-size: 50px;
    font-weight: 500;
    color: #2b6cb0;
    transition: 0.2s ease-in;
    @media (max-width: 600px) {
        transition: 0.2s ease-in;
        font-size: 40px;
    }
    @media (max-width: 500px) {
        transition: 0.2s ease-in;
        font-size: 30px;
    }
`;
