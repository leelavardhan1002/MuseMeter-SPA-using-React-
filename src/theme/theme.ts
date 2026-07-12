import { createTheme } from "@mui/material/styles";
import { lightPalette, lightComponents, darkPalette, darkComponents } from "./palette";
import { lightTokens, darkTokens } from "./tokens/finalTokens";

export const getTheme = (mode: "light" | "dark" = "light") => {
    const selectedPalette = mode === "light" ? lightPalette : darkPalette;
    const selectedComponents = mode === "light" ? lightComponents : darkComponents;
    const t = mode === "light" ? lightTokens : darkTokens;

    return createTheme({
        palette: selectedPalette,
        spacingTokens: t.spacing,
        shape: {
            borderRadius: parseInt(t.shape.small),
            none: t.shape.none,
            extraSmall: t.shape.extraSmall,
            small: t.shape.small,
            medium: t.shape.medium,
            large: t.shape.large,
            extraLarge: t.shape.extraLarge,
            full: t.shape.full,
        },
        typography: {
            fontFamily: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"].join(","),
        },
        components: selectedComponents,
    });
};

export const theme = getTheme("light");
