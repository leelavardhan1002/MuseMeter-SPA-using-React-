import { styled } from "@mui/material/styles";
import { depthStyle, type DepthLevel } from "../../../utils/depth/depth";

interface StyledButtonProps {
    $variant?: "primary" | "danger" | "warning" | "outline-warning" | "gold";
    $size?: "sm" | "md";
    $depth?: DepthLevel;
    $pressed?: boolean;
}

export const StyledButton = styled("button")<StyledButtonProps>(
    ({ theme, $variant = "primary", $size = "md", $depth = 1, $pressed }) => {
        const depthLevel: DepthLevel = $pressed ? "pressed" : $depth;

        const variantStyles: Record<string, object> = {
            primary: {
                background: theme.palette.secondary.main,
                color: theme.palette.text.onSecondary,
                "&:hover": { opacity: 0.9 },
            },
            danger: {
                background: theme.palette.error.main,
                color: theme.palette.text.onError,
            },
            warning: {
                background: theme.palette.warning.main,
                color: theme.palette.text.onWarning,
            },
            "outline-warning": {
                background: "transparent",
                border: `1px solid ${theme.palette.warning.main}`,
                color: theme.palette.warning.main,
                boxShadow: "none",
                backgroundImage: "none",
            },
            gold: {
                background: theme.palette.primary.main,
                color: theme.palette.text.onPrimary,
                "&:hover": { opacity: 0.9 },
            },
        };

        const sizeStyles: Record<string, object> = {
            sm: { padding: "0.25rem 0.5rem", fontSize: "0.875rem" },
            md: { padding: "0.9rem 2rem", fontSize: "1rem" },
        };

        return {
            borderRadius: "0.5rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease-in-out",
            ...depthStyle($variant === "outline-warning" ? 0 : depthLevel, theme.palette.depth),
            ...variantStyles[$variant],
            ...sizeStyles[$size],
            "&:disabled": {
                opacity: 0.6,
                cursor: "not-allowed",
            },
            ...($pressed && { transform: "translateY(1px)" }),
        };
    }
);
