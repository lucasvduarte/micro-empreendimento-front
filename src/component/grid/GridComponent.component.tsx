import { ReactNode } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '../container/Container';

interface Props {
    direction?: "row" | "column";
    justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
    children: ReactNode;
    spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
    margin?: string;
}

export default function GridComponent({ direction, justify, alignItems, children, spacing, margin }: Props) {

    return (
        <Container margin={margin || ''}>
            <Grid container direction={direction || "row"} justify={justify || "flex-start"} alignItems={alignItems || "center"} spacing={spacing || 0}>
                {children}
            </Grid>
        </Container>
    );
}
