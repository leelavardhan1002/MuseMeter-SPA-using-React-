import { styled } from "@mui/material/styles";
import { depthStyle } from "../../../utils/depth/depth";

export const StyledCard = styled("div")(({ theme }) => ({
    height: "100%",
    background: theme.palette.background.surface,
    borderRadius: "0.75rem",
    padding: "1.25rem",
    ...depthStyle(2, theme.palette.depth),
}));

export const StyledTitle = styled("h5")(({ theme }) => ({
    fontSize: "1.125rem",
    fontWeight: 600,
    margin: "0 0 0.25rem",
    color: theme.palette.text.primary,
}));

export const StyledSubtitle = styled("h6")(({ theme }) => ({
    fontSize: "0.875rem",
    fontWeight: 400,
    margin: "0 0 0.75rem",
    color: theme.palette.text.muted,
}));

export const StyledThoughts = styled("p")(({ theme }) => ({
    margin: "0.5rem 0 0",
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
}));

export const StyledFavIcon = styled("span")(({ theme }) => ({
    color: theme.palette.warning.main,
}));

export const StyledActions = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "0.75rem",
});
