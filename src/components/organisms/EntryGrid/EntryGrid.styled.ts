import { styled } from "@mui/material/styles";

export const StyledGrid = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
});
