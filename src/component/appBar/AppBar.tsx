import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

export const AppBarSteled = styled(({ ...props }) => (
    <AppBar position="relative" {...props} />
))`
    background-color: #2B6CB0;
    && { 
        box-shadow:  0px 2px 5px rgba(0, 0, 0, 0.2);
        width: 100%;
    }
`;

export const MenuButton = styled.div`
    margin-right: 16px;
`;

export const Title = styled(({ ...props }) => (
    <Typography variant="h6"  {...props} />
))`
    && {
        margin-left: 8px;
        flex-grow: 1;
        color: #FFFFFF;
    }
`;

export const TitleClose = styled(({ ...props }) => (
    <Typography variant="h6"  {...props} />
))`
    && {
        margin-right: 2px; 
    }
`;