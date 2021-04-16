import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({
    values: {
        xs: 0,
        sm: 500,
        md: 760,
        lg: 1180,
        xl: 1720,
    }
});

const theme = createMuiTheme({
    breakpoints,
    overrides: {
        MuiTypography: {
            h6: {
                fontSize: 20,
                [breakpoints.down("sm")]: {
                    fontSize: 18
                },
                [breakpoints.down("xs")]: {
                    fontSize: 14
                }
            },
        }
    },
    palette: {
        background: {
            default: "#fff",
            paper: "#fff"
        },
        common: {
            black: "#ffffff",
            white: "#ffffff"
        },
        primary: {
            contrastText: "#ffffff",
            dark: "#0060B8",
            light: "#212121",
            main: "#4298E1",
        },
        secondary: {
            contrastText: "#ffffff",
            dark: "#FF0000",
            light: "#ff7c7c",
            main: "#f66465"
        },

        text: {
            primary: "#464646",
            secondary: "#2B6CB0"
        }
    }
});

export default theme;