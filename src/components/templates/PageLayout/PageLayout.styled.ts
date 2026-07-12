import { styled } from "@mui/material/styles";

export const StyledLayout = styled("div")(({ theme }) => ({
    minHeight: "100vh",
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
}));

export const StyledTitle = styled("h2")(({ theme }) => ({
    fontSize: "2rem",
    fontWeight: 600,
    margin: 0,
    color: theme.palette.text.primary,
    borderBottom: `2px solid ${theme.palette.border.default}`,
    paddingBottom: "0.5rem",
}));
