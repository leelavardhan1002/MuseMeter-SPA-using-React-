import { styled } from "@mui/material/styles";

export const StyledToolbar = styled("div")({
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
    alignItems: "flex-end",
});

export const StyledSearchArea = styled("div")({
    flex: "0 0 250px",
});

export const StyledFilterArea = styled("div")({
    flex: "1 1 auto",
    minWidth: 0,
});
