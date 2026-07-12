import { Palette } from "@mui/material/styles";
import { StyledCard, StyledLabel, StyledCount, IconLabel } from "./StatCard.styled";
import { SvgIconComponent } from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

interface StatCardProps {
    label: string;
    count: number;
    color: keyof Palette;
    Icon: SvgIconComponent;
    glowIntensity?: number;
}

export function StatCard({ label, count, color, Icon, glowIntensity }: StatCardProps) {
    return (
        <StyledCard color={color} glowIntensity={glowIntensity}>
            <IconLabel>
                <Icon fontSize="large" color={color as SvgIconProps["color"]} />
                <StyledLabel color={color}>{label}</StyledLabel>
            </IconLabel>
            <StyledCount color={color}>{count}</StyledCount>
        </StyledCard>
    );
}
