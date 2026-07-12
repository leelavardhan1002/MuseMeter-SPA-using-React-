import { styled } from "@mui/material/styles";

export const StyledRating = styled("div")({
    display: "inline-flex",
    gap: "0.125rem",
});

export const StyledStar = styled("span")<{ $filled?: boolean; $clickable?: boolean }>(
    ({ theme, $filled, $clickable }) => ({
        fontSize: "1.5rem",
        color: $filled
            ? theme.palette.warning.main
            : theme.palette.border.variant,
        transition: "color 0.15s ease",
        ...($clickable && {
            cursor: "pointer",
            "&:hover": {
                color: theme.palette.primary.main,
            },
        }),
    })
);
