import type { TextareaHTMLAttributes } from "react";
import { StyledWrapper, StyledLabel, StyledTextarea } from "./TextArea.styled";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export function TextArea({ label, id, ...rest }: TextAreaProps) {
    const textAreaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
        <StyledWrapper>
            {label && (
                <StyledLabel htmlFor={textAreaId}>
                    {label}
                </StyledLabel>
            )}
            <StyledTextarea id={textAreaId} {...rest} />
        </StyledWrapper>
    );
}
