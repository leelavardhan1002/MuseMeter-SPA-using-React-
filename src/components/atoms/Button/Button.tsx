import { useState, type ButtonHTMLAttributes, type ReactNode } from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "danger" | "warning" | "outline-warning" | "gold";
    size?: "sm" | "md";
    depth?: 0 | 1 | 2 | 3;
    children: ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    depth = 1,
    children,
    onPointerDown,
    onPointerUp,
    ...rest
}: ButtonProps) {
    const [pressed, setPressed] = useState(false);

    return (
        <StyledButton
            $variant={variant}
            $size={size}
            $depth={depth}
            $pressed={pressed}
            onPointerDown={(e) => {
                setPressed(true);
                onPointerDown?.(e);
            }}
            onPointerUp={(e) => {
                setPressed(false);
                onPointerUp?.(e);
            }}
            onPointerLeave={() => setPressed(false)}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}
