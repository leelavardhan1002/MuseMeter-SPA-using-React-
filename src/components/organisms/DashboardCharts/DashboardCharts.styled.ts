import { styled } from "@mui/material/styles";
import { depthStyle } from "../../../utils/depth/depth";

export const StyledContainer = styled("div")({
    fontFamily: "Arial, sans-serif",
});

export const StyledSummaryRow = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "1.5rem",
});

export const StyledChartGrid = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "1.5rem",
});

export const StyledChartCard = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(8px)",
    borderRadius: 12,
    padding: "1rem",
    ...depthStyle(2, theme.palette.depth),
}));

export const StyledChartTitle = styled("h3")(({ theme }) => ({
    textAlign: "center",
    fontSize: "1rem",
    color: theme.palette.text.primary,
}));
