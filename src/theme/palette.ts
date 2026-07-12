import lightBackgroundImage from "../assets/light_main_background.jpg";
import darkBackgroundImage from "../assets/dark_main_background.png";
import { lightTokens, darkTokens } from "./tokens/finalTokens";
import type { DesignTokens } from "./tokens/finalTokens";

function buildPalette(t: DesignTokens, mode: "light" | "dark") {
    return {
        mode,
        primary: {
            main: t.primary.main,
            contrastText: t.primary.contrastText,
        },
        secondary: {
            main: t.secondary.main,
            contrastText: t.secondary.contrastText,
        },
        tertiary: {
            main: t.tertiary.main,
            contrastText: t.tertiary.contrastText,
        },
        success: {
            main: t.success.main,
            contrastText: t.success.contrastText,
        },
        warning: {
            main: t.warning.main,
            contrastText: t.warning.contrastText,
        },
        error: {
            main: t.error.main,
            contrastText: t.error.contrastText,
        },
        info: {
            main: t.info.main,
            contrastText: t.info.contrastText,
        },
        background: {
            default: "transparent",
            paper: t.background.surface,
            surface: t.background.surface,
            surfaceVariant: t.background.surfaceVariant,
            surfaceHover: t.background.surfaceHover,
        },
        text: {
            primary: t.text.primary,
            secondary: t.text.secondary,
            muted: t.text.muted,
            inverse: t.text.inverse,
            onPrimary: t.text.onPrimary,
            onSecondary: t.text.onSecondary,
            onTertiary: t.text.onTertiary,
            onSuccess: t.text.onSuccess,
            onWarning: t.text.onWarning,
            onError: t.text.onError,
            onInfo: t.text.onInfo,
        },
        divider: t.border.default,
        border: {
            default: t.border.default,
            variant: t.border.variant,
            strong: t.border.strong,
        },
        action: {
            hover: t.background.surfaceHover,
        },
        interactive: t.interactive,
        elevation: t.elevation,
        depth: t.depth,
        grey: {
            50: "#f8f6f3",
            100: "#f0ece5",
            200: "#e0d8cc",
            300: "#ccc2b2",
            700: "#5c5347",
            800: "#3a342c",
            900: "#1a1612",
        },
    };
}

function buildComponents(t: DesignTokens, bgImage: string) {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: t.background.default,
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    margin: 0,
                    color: t.text.primary,
                    transition: "background-color 0.6s ease, color 0.6s ease",
                    WebkitFontSmoothing: "antialiased",
                    MozOsxFontSmoothing: "grayscale",
                },
                code: {
                    fontFamily:
                        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
                },
                a: {
                    color: t.primary.main,
                },
                "::selection": {
                    background: t.primary.main,
                    color: t.text.onPrimary,
                },
            },
        },
    };
}

export const lightPalette = buildPalette(lightTokens, "light");
export const lightComponents = buildComponents(lightTokens, lightBackgroundImage);

export const darkPalette = buildPalette(darkTokens, "dark");
export const darkComponents = buildComponents(darkTokens, darkBackgroundImage);
