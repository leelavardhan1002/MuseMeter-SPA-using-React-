import { styled } from "@mui/material/styles";

export const StyledForm = styled("form")({
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    maxWidth: 700,
});

export const StyledRatingGroup = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    "& label": {
        fontSize: "1rem",
        fontWeight: 500,
    },
});
