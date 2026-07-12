import { styled } from "@mui/material/styles";

export const StyledBadge = styled("span")(({ theme }) => ({
    display: "inline-block",
    padding: "0.25rem 0.75rem",
    borderRadius: 9999,
    color: theme.palette.text.inverse,
    fontSize: "0.875rem",
    fontWeight: 600,
}));
