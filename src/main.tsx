import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { App } from "./App";
import { getTheme } from "./theme";
import { ThemeModeProvider, useThemeMode } from "./hooks/useThemeMode";

function ThemedApp() {
    const { mode } = useThemeMode();
    const currentTheme = getTheme(mode);

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    );
}

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found");
}

createRoot(root).render(
    <StrictMode>
        <ThemeModeProvider>
            <ThemedApp />
        </ThemeModeProvider>
    </StrictMode>
);
