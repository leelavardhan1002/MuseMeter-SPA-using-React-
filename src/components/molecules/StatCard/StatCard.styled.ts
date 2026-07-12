import { styled, Palette } from "@mui/material/styles";
import { depthStyle } from "../../../utils/depth/depth";
import { glowStyle } from "../../../utils/glow";
import { Box } from "@mui/material";

export const StyledCard = styled("div")<{ color: keyof Palette; glowIntensity?: number }>(
    ({ theme, color, glowIntensity }) => {
        const depth = depthStyle(2, theme.palette.depth);
        const glow = glowStyle(theme.palette[color].main, "vertical", {
            intensity: glowIntensity,
        });
        return {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "0.8rem",
            gap: theme.spacingTokens.spaceXs,
            maxWidth: "12rem",
            textAlign: "center",
            backdropFilter: "blur(8px)",
            borderRadius: theme.shape.medium,
            ...depth,
            backgroundImage: [depth.backgroundImage, glow.backgroundImage].join(", "),
        };
    },
);

export const IconLabel = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacingTokens.space2xs,
}));

export const StyledLabel = styled("h3")<{ color: keyof Palette }>(({ theme, color }) => ({
    color: theme.palette[color].main,
    margin: 0,
    fontSize: "1rem",
}));

export const StyledCount = styled("p")<{ color: keyof Palette }>(({ theme, color }) => ({
    color: theme.palette[color].main,
    fontSize: "2.5rem",
    margin: 0,
}));
