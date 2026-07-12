import type { ReactNode } from "react";
import { StyledLayout, StyledTitle } from "./PageLayout.styled";

interface PageLayoutProps {
    title: string;
    children: ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
    return (
        <StyledLayout>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </StyledLayout>
    );
}
