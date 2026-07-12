import type { SelectHTMLAttributes } from "react";
import { StyledWrapper, StyledLabel, StyledSelect } from "./Select.styled";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: SelectOption[];
}

export function Select({ label, options, id, ...rest }: SelectProps) {
    const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
        <StyledWrapper>
            {label && (
                <StyledLabel htmlFor={selectId}>
                    {label}
                </StyledLabel>
            )}
            <StyledSelect id={selectId} {...rest}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </StyledSelect>
        </StyledWrapper>
    );
}
