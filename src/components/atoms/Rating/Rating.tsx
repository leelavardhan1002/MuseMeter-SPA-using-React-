import { StyledRating, StyledStar } from "./Rating.styled";

interface RatingProps {
    value: number;
    max?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
}

export function Rating({ value, max = 5, onChange, readonly = false }: RatingProps) {
    return (
        <StyledRating>
            {Array.from({ length: max }, (_, i) => {
                const starValue = i + 1;
                return (
                    <StyledStar
                        key={starValue}
                        $filled={starValue <= value}
                        $clickable={!readonly}
                        onClick={() => !readonly && onChange?.(starValue)}
                        role={readonly ? undefined : "button"}
                        tabIndex={readonly ? undefined : 0}
                        onKeyDown={(e) => {
                            if (!readonly && (e.key === "Enter" || e.key === " ")) {
                                onChange?.(starValue);
                            }
                        }}
                    >
                        &#9733;
                    </StyledStar>
                );
            })}
        </StyledRating>
    );
}
