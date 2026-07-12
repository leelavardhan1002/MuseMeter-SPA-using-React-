import { styled } from "@mui/material/styles";

export const StyledWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
});

export const StyledLabel = styled("label")(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: 500,
    marginBottom: "0.5rem",
    color: theme.palette.text.primary,
}));

export const StyledInput = styled("input")<{ $hasError?: boolean }>(
    ({ theme, $hasError }) => ({
        padding: "0.75rem 1rem",
        border: `1px solid ${theme.palette.border.variant}`,
        borderRadius: "0.5rem",
        fontSize: "1rem",
        background: theme.palette.background.surface,
        color: theme.palette.text.primary,
        transition: "all 0.2s ease-in-out",
        "&:focus": {
            borderColor: theme.palette.secondary.main,
            boxShadow: `0 0 0 3px ${theme.palette.interactive.focusRing}`,
            outline: "none",
        },
        ...($hasError && {
            borderColor: theme.palette.error.main,
        }),
    })
);

export const StyledError = styled("span")(({ theme }) => ({
    color: theme.palette.error.main,
    fontSize: "0.875rem",
    marginTop: "0.25rem",
}));
