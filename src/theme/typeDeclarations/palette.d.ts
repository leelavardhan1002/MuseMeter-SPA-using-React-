import "@mui/material/styles";
import "@mui/icon-material";
import type {
    DepthTokens,
    ElevationTokens,
    InteractiveTokens,
    SpacingTokens,
} from "../types";

/* ── Extend MUI's palette ─────────────────────────────── */
declare module "@mui/icon-material" {
    interface SvgIconPropsColorOverrides {
        tertiary: PaletteColor;
        border: {
            default: string;
            variant: string;
            strong: string;
        };
        interactive: InteractiveTokens;
        elevation: ElevationTokens;
        depth: DepthTokens;
    }
}
declare module "@mui/material/styles" {
    interface Palette {
        tertiary: PaletteColor;
        border: {
            default: string;
            variant: string;
            strong: string;
        };
        interactive: InteractiveTokens;
        elevation: ElevationTokens;
        depth: DepthTokens;
    }

    interface PaletteOptions {
        tertiary?: SimplePaletteColorOptions;
        border?: {
            default?: string;
            variant?: string;
            strong?: string;
        };
        interactive?: InteractiveTokens;
        elevation?: ElevationTokens;
        depth?: DepthTokens;
    }

    interface TypeBackground {
        surface: string;
        surfaceVariant: string;
        surfaceHover: string;
    }

    interface TypeText {
        muted: string;
        inverse: string;
        onPrimary: string;
        onSecondary: string;
        onTertiary: string;
        onSuccess: string;
        onWarning: string;
        onError: string;
        onInfo: string;
    }

    interface Shape {
        none: string;
        extraSmall: string;
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
        full: string;
    }

    interface ShapeOptions {
        none?: string;
        extraSmall?: string;
        small?: string;
        medium?: string;
        large?: string;
        extraLarge?: string;
        full?: string;
    }

    interface Theme {
        spacingTokens: SpacingTokens;
    }

    interface ThemeOptions {
        spacingTokens?: SpacingTokens;
    }
}
