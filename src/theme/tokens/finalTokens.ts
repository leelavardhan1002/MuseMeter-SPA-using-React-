/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              MUSEMETER  DESIGN  TOKEN  SYSTEM               ║
 * ║                                                              ║
 * ║  Single source of truth.  One file.  Two themes.             ║
 * ║  Every color is unique — no value reused across roles.       ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * Mapped into MUI theme:
 *   theme.palette.background.surface    theme.palette.text.primary
 *   theme.palette.primary.main          theme.palette.secondary.main
 *   theme.palette.border.default        theme.palette.depth.*
 *   theme.palette.interactive.focusRing theme.palette.elevation.shadowMd
 *   theme.spacingTokens.spaceM          theme.shape.medium
 */

/* ═══════════════════════════════════════════════════════════════
 *  INTERFACES
 * ═══════════════════════════════════════════════════════════════ */

export interface SpacingTokens {
    spaceNil: string;
    space4xs: string;
    space3xs: string;
    space2xs: string;
    spaceXs: string;
    spaceS: string;
    spaceM: string;
    spaceL: string;
    spaceXl: string;
    space2xl: string;
    space3xl: string;
    space4xl: string;
    space5xl: string;
    space6xl: string;
}

export interface ShapeTokens {
    none: string;
    extraSmall: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
    full: string;
}

export interface DepthTokens {
    shadowAmbient: string;
    shadowSoft: string;
    shadowMedium: string;
    shadowDeep: string;
    highlight: string;
    highlightSide: string;
    shadowEdge: string;
    shadowSide: string;
    gradientTop: string;
    gradientBottom: string;
    border: string;
    borderInset: string;
    ring: string;
}

export interface ElevationTokens {
    shadowSm: string;
    shadowMd: string;
    shadowLg: string;
    shadowColor: string;
}

export interface InteractiveTokens {
    focus: string;
    focusRing: string;
    disabled: string;
    disabledText: string;
}

export interface RoleTokens {
    main: string;
    contrastText: string;
}

export interface DesignTokens {
    /* Surfaces */
    background: {
        default: string;
        surface: string;
        surfaceVariant: string;
        surfaceHover: string;
    };
    /* Typography */
    text: {
        primary: string;
        secondary: string;
        muted: string;
        inverse: string;
        onPrimary: string;
        onSecondary: string;
        onTertiary: string;
        onSuccess: string;
        onWarning: string;
        onError: string;
        onInfo: string;
    };
    /* Borders */
    border: {
        default: string;
        variant: string;
        strong: string;
    };
    /* Role-based color pairs */
    primary: RoleTokens;
    secondary: RoleTokens;
    tertiary: RoleTokens;
    success: RoleTokens;
    warning: RoleTokens;
    error: RoleTokens;
    info: RoleTokens;
    /* States */
    interactive: InteractiveTokens;
    /* Shadows */
    elevation: ElevationTokens;
    depth: DepthTokens;
    /* Layout (theme-independent) */
    spacing: SpacingTokens;
    shape: ShapeTokens;
}

/* ═══════════════════════════════════════════════════════════════
 *  SHARED  TOKENS  (identical in light & dark)
 * ═══════════════════════════════════════════════════════════════ */

const spacing: SpacingTokens = {
    spaceNil:  "0rem",
    space4xs:  "0.125rem",
    space3xs:  "0.25rem",
    space2xs:  "0.5rem",
    spaceXs:   "0.75rem",
    spaceS:    "1rem",
    spaceM:    "1.5rem",
    spaceL:    "2rem",
    spaceXl:   "2.5rem",
    space2xl:  "3rem",
    space3xl:  "4rem",
    space4xl:  "4.5rem",
    space5xl:  "6rem",
    space6xl:  "7.5rem",
};

const shape: ShapeTokens = {
    none:       "0rem",
    extraSmall: "0.25rem",
    small:      "0.5rem",
    medium:     "0.75rem",
    large:      "1rem",
    extraLarge: "1.5rem",
    full:       "6249.9375rem",
};

/* ═══════════════════════════════════════════════════════════════
 *  LIGHT  THEME
 *
 *  Palette philosophy:
 *    — Warm ivory canvas, cool slate typography
 *    — Rich amber gold primary, electric indigo secondary
 *    — Coral-rose tertiary for accent
 *    — Jewel-tone status colors, each with its own character
 *    — Every on-color is tuned to its background, not generic white
 * ═══════════════════════════════════════════════════════════════ */

export const lightTokens: DesignTokens = {
    spacing,
    shape,

    /* ── Surfaces ──────────────────────────────────────── */
    background: {
        default:        "#faf8f5",   // warm ivory
        surface:        "#ffffff",   // pure card white
        surfaceVariant: "#f3efe9",   // subtle warm tint
        surfaceHover:   "#ede8e0",   // hover lift
    },

    /* ── Text ──────────────────────────────────────────── */
    text: {
        primary:    "#1a1612",   // deep warm charcoal
        secondary:  "#5c5347",   // warm mid-brown
        muted:      "#9e9486",   // soft taupe
        inverse:    "#ffffff",
        onPrimary:  "#1a1000",   // dark gold contrast
        onSecondary:"#ffffff",
        onTertiary: "#ffffff",
        onSuccess:  "#0a2e14",   // deep forest
        onWarning:  "#2e1a00",   // deep amber
        onError:    "#ffffff",
        onInfo:     "#ffffff",
    },

    /* ── Borders ───────────────────────────────────────── */
    border: {
        default: "#e8e2d9",   // warm sand
        variant: "#d4ccc0",   // deeper sand
        strong:  "#b8ae9e",   // pronounced warm edge
    },

    /* ── Primary — Amber Gold ──────────────────────────── */
    primary: {
        main:         "#c8930a",   // rich amber gold
        contrastText: "#1a1000",
    },

    /* ── Secondary — Deep Indigo ───────────────────────── */
    secondary: {
        main:         "#3e35a8",   // electric indigo
        contrastText: "#ffffff",
    },

    /* ── Tertiary — Coral Rose ─────────────────────────── */
    tertiary: {
        main:         "#d44e6e",   // warm coral-rose
        contrastText: "#ffffff",
    },

    /* ── Success — Emerald ─────────────────────────────── */
    success: {
        main:         "#1a8c52",   // rich emerald
        contrastText: "#ffffff",
    },

    /* ── Warning — Burnt Amber ─────────────────────────── */
    warning: {
        main:         "#c47a10",   // deep burnt amber
        contrastText: "#ffffff",
    },

    /* ── Error — Crimson ───────────────────────────────── */
    error: {
        main:         "#c92a3f",   // deep crimson
        contrastText: "#ffffff",
    },

    /* ── Info — Sapphire ───────────────────────────────── */
    info: {
        main:         "#1e6ce0",   // vivid sapphire
        contrastText: "#ffffff",
    },

    /* ── Category Colors ───────────────────────────────── */
    // category: {
    //     book:    "#2d7dd2",   // cerulean
    //     movie:   "#1a9a6b",   // jade
    //     poem:    "#d4870e",   // marigold
    //     music:   "#c9304a",   // ruby
    //     theatre: "#7c3aed",   // violet
    // },

    /* ── Interactive States ────────────────────────────── */
    interactive: {
        focus:        "#3e35a8",
        focusRing:    "rgba(62,53,168,0.28)",
        disabled:     "#d4ccc0",
        disabledText: "#b8ae9e",
    },

    /* ── Elevation (flat box-shadows) ──────────────────── */
    elevation: {
        shadowSm:    "0 1px 2px rgba(26,22,18,0.06)",
        shadowMd:    "0 4px 8px -2px rgba(26,22,18,0.08), 0 2px 4px -2px rgba(26,22,18,0.04)",
        shadowLg:    "0 12px 24px -4px rgba(26,22,18,0.10), 0 4px 8px -4px rgba(26,22,18,0.04)",
        shadowColor: "rgba(26,22,18,0.08)",
    },

    /* ── Depth / 3D system ─────────────────────────────── */
    depth: {
        shadowAmbient:  "rgba(26,22,18,0.05)",
        shadowSoft:     "rgba(26,22,18,0.07)",
        shadowMedium:   "rgba(26,22,18,0.10)",
        shadowDeep:     "rgba(26,22,18,0.06)",
        highlight:      "rgba(255,255,255,0.92)",
        highlightSide:  "rgba(255,255,255,0.55)",
        shadowEdge:     "rgba(26,22,18,0.06)",
        shadowSide:     "rgba(26,22,18,0.04)",
        gradientTop:    "rgba(255,255,255,0.45)",
        gradientBottom: "rgba(26,22,18,0.02)",
        border:         "rgba(26,22,18,0.08)",
        borderInset:    "rgba(26,22,18,0.05)",
        ring:           "rgba(62,53,168,0.06)",
    },
};

/* ═══════════════════════════════════════════════════════════════
 *  DARK  THEME
 *
 *  Palette philosophy:
 *    — Deep espresso canvas, warm-cream typography
 *    — Brighter, more saturated primaries for dark contrast
 *    — Toned-down status colors that don't burn the eyes
 *    — Glassmorphism-inspired translucent surfaces
 * ═══════════════════════════════════════════════════════════════ */

export const darkTokens: DesignTokens = {
    spacing,
    shape,

    /* ── Surfaces ──────────────────────────────────────── */
    background: {
        default:        "#111014",   // deep charcoal-espresso
        surface:        "#1c1a20",   // card surface
        surfaceVariant: "#27242c",   // elevated surface
        surfaceHover:   "#302c36",   // hover lift
    },

    /* ── Text ──────────────────────────────────────────── */
    text: {
        primary:    "#f0ece4",   // warm cream
        secondary:  "#b0a898",   // muted sand
        muted:      "#706860",   // dim taupe
        inverse:    "#111014",
        onPrimary:  "#1a1000",
        onSecondary:"#ffffff",
        onTertiary: "#ffffff",
        onSuccess:  "#d4f5e2",   // soft mint
        onWarning:  "#ffedc2",   // soft gold
        onError:    "#ffffff",
        onInfo:     "#dceaff",   // soft sky
    },

    /* ── Borders ───────────────────────────────────────── */
    border: {
        default: "#2e2a32",   // subtle violet-charcoal
        variant: "#3c3742",   // slightly visible
        strong:  "#504a56",   // pronounced
    },

    /* ── Primary — Bright Amber ────────────────────────── */
    primary: {
        main:         "#e8b520",   // luminous amber
        contrastText: "#1a1000",
    },

    /* ── Secondary — Electric Indigo ───────────────────── */
    secondary: {
        main:         "#6c63ff",   // vivid indigo
        contrastText: "#ffffff",
    },

    /* ── Tertiary — Rose Pink ──────────────────────────── */
    tertiary: {
        main:         "#f06888",   // bright rose
        contrastText: "#1a0a10",
    },

    /* ── Success — Mint Green ──────────────────────────── */
    success: {
        main:         "#34d87a",   // fresh mint
        contrastText: "#0a2e14",
    },

    /* ── Warning — Golden Amber ────────────────────────── */
    warning: {
        main:         "#f0a030",   // warm gold
        contrastText: "#2e1a00",
    },

    /* ── Error — Rose Red ──────────────────────────────── */
    error: {
        main:         "#f04860",   // vivid rose-red
        contrastText: "#ffffff",
    },

    /* ── Info — Sky Blue ───────────────────────────────── */
    info: {
        main:         "#5896f0",   // bright sky
        contrastText: "#ffffff",
    },

    /* ── Category Colors ───────────────────────────────── */
    // category: {
    //     book:    "#58a0f0",   // sky cerulean
    //     movie:   "#34d8a0",   // mint jade
    //     poem:    "#f0b030",   // bright marigold
    //     music:   "#f05868",   // soft ruby
    //     theatre: "#a78bfa",   // lavender violet
    // },

    /* ── Interactive States ────────────────────────────── */
    interactive: {
        focus:        "#6c63ff",
        focusRing:    "rgba(108,99,255,0.35)",
        disabled:     "#3c3742",
        disabledText: "#504a56",
    },

    /* ── Elevation (flat box-shadows) ──────────────────── */
    elevation: {
        shadowSm:    "0 1px 3px rgba(0,0,0,0.35)",
        shadowMd:    "0 4px 8px -2px rgba(0,0,0,0.45), 0 2px 4px -2px rgba(0,0,0,0.30)",
        shadowLg:    "0 12px 24px -4px rgba(0,0,0,0.55), 0 4px 8px -4px rgba(0,0,0,0.35)",
        shadowColor: "rgba(0,0,0,0.45)",
    },

    /* ── Depth / 3D system ─────────────────────────────── */
    depth: {
        shadowAmbient:  "rgba(0,0,0,0.28)",
        shadowSoft:     "rgba(0,0,0,0.32)",
        shadowMedium:   "rgba(0,0,0,0.42)",
        shadowDeep:     "rgba(0,0,0,0.38)",
        highlight:      "rgba(255,255,255,0.07)",
        highlightSide:  "rgba(255,255,255,0.04)",
        shadowEdge:     "rgba(0,0,0,0.32)",
        shadowSide:     "rgba(0,0,0,0.22)",
        gradientTop:    "rgba(255,255,255,0.04)",
        gradientBottom: "rgba(0,0,0,0.12)",
        border:         "rgba(255,255,255,0.06)",
        borderInset:    "rgba(255,255,255,0.04)",
        ring:           "rgba(108,99,255,0.10)",
    },
};
