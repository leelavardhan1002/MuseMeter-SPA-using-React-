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

export const StyledSelect = styled("select")(({ theme }) => ({
    padding: "0.75rem 1rem",
    border: `1px solid ${theme.palette.border.variant}`,
    borderRadius: "0.5rem",
    fontSize: "1rem",
    background: theme.palette.background.surface,
    color: theme.palette.text.primary,
    transition: "all 0.2s ease-in-out",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.75rem center",
    backgroundSize: "16px 12px",
    paddingRight: "2.5rem",
    "&:focus": {
        borderColor: theme.palette.secondary.main,
        boxShadow: `0 0 0 3px ${theme.palette.interactive.focusRing}`,
        outline: "none",
    },
}));
