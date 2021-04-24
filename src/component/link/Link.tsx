import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkRouter = styled(({ color, ...props }) => (
    <Link {...props} />
))`
    text-decoration: none; 
    color:  ${props => props.color || '#FFFFFF'} ;;
    cursor: pointer; 
`;