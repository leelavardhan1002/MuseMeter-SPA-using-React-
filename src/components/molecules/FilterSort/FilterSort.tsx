import { Select } from "../../atoms";
import { Button } from "../../atoms";
import { ENTRY_TYPE_OPTIONS } from "../../../constants/categories";
import { StyledControls } from "./FilterSort.styled";

interface FilterSortProps {
    filterType: string;
    onFilterChange: (type: string) => void;
    sortOption: string;
    onSortChange: (sort: string) => void;
    showFavorites: boolean;
    onToggleFavorites: () => void;
}

const SORT_OPTIONS = [
    { value: "date", label: "Date Added" },
    { value: "rating", label: "Rating (High \u2192 Low)" },
];

const FILTER_OPTIONS = [
    { value: "all", label: "All Types" },
    ...ENTRY_TYPE_OPTIONS.map((o) => ({ value: o.value, label: o.label })),
];

export function FilterSort({
    filterType,
    onFilterChange,
    sortOption,
    onSortChange,
    showFavorites,
    onToggleFavorites,
}: FilterSortProps) {
    return (
        <StyledControls>
            <Select
                options={FILTER_OPTIONS}
                value={filterType}
                onChange={(e) => onFilterChange(e.target.value)}
            />
            <Select
                options={SORT_OPTIONS}
                value={sortOption}
                onChange={(e) => onSortChange(e.target.value)}
            />
            <Button
                variant={showFavorites ? "warning" : "outline-warning"}
                onClick={onToggleFavorites}
            >
                {showFavorites ? "Show All" : "Show Favorites \u2B50"}
            </Button>
        </StyledControls>
    );
}
