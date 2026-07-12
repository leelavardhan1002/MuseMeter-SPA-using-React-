import type { InputHTMLAttributes } from "react";
import { StyledWrapper, StyledLabel, StyledInput, StyledError } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ label, error, id, ...rest }: InputProps) {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
        <StyledWrapper>
            {label && (
                <StyledLabel htmlFor={inputId}>
                    {label}
                </StyledLabel>
            )}
            <StyledInput
                id={inputId}
                $hasError={!!error}
                {...rest}
            />
            {error && <StyledError>{error}</StyledError>}
        </StyledWrapper>
    );
}
