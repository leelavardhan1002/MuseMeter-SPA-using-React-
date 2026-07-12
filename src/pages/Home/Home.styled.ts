import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { depthStyle } from "../../utils/depth";
import { theme } from "../../theme";

export const StyledHome = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacingTokens.spaceM,
}));

export const StyledIntro = styled(Box)(({ theme }) => ({
    ...depthStyle(2, theme.palette.depth),
    padding: `${theme.spacingTokens.spaceXs} ${theme.spacingTokens.spaceS}`,
    display: "flex",
    width: "100%",
    backdropFilter: "blur(8px)",
    borderRadius: theme.shape.medium,
    backgroundColor: "transparent",
    gap: theme.spacingTokens.spaceS,
}));

export const StyledIntroInfo = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacingTokens.spaceS,
});

export const StyledIntroThings = styled(Box)({
    display: "flex",
    minHeight: "181px",
    flexDirection: "column",
    justifyContent: "end",
});
