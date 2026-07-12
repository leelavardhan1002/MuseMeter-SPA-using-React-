import type { ReactNode } from "react";
import { StyledBadge } from "./Badge.styled";

interface BadgeProps {
    color: string;
    children: ReactNode;
}

export function Badge({ color, children }: BadgeProps) {
    return (
        <StyledBadge style={{ backgroundColor: color }}>
            {children}
        </StyledBadge>
    );
}
