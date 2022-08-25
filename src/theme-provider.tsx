import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { useContext } from "react";
import { AppContext } from "./contexts/app.context";

// Create a theme instance.
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2150b6',
        },
    }
});

// Create a theme instance.
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2150b6',
        },
    }
});


type Props = {
    children?: React.ReactNode
}

export default function MyThemeProvider({ children }: Props) {
    const { darkMode } = useContext(AppContext)
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            { children }
        </ThemeProvider>
    )
}
