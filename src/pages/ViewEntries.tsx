import { useEffect, useState, useMemo } from "react";
import { useEntryStore } from "../store/useEntryStore";
import { PageLayout } from "../components/templates";
import { SearchBar, FilterSort } from "../components/molecules";
import { EntryGrid } from "../components/organisms";
import { StyledToolbar, StyledSearchArea, StyledFilterArea } from "./ViewEntries.styled";

export function ViewEntries() {
    const entries = useEntryStore((s) => s.entries);
    const initialize = useEntryStore((s) => s.initialize);
    const deleteEntry = useEntryStore((s) => s.deleteEntry);
    const toggleFavorite = useEntryStore((s) => s.toggleFavorite);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [sortOption, setSortOption] = useState("date");
    const [showFavorites, setShowFavorites] = useState(false);

    useEffect(() => {
        initialize();
    }, [initialize]);

    const filteredEntries = useMemo(() => {
        let result = [...entries];

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(
                (e) =>
                    e.title.toLowerCase().includes(term) ||
                    e.thoughts.toLowerCase().includes(term)
            );
        }

        if (filterType !== "all") {
            result = result.filter((e) => e.type === filterType);
        }

        if (showFavorites) {
            result = result.filter((e) => e.isFavorite);
        }

        result.sort((a, b) => {
            if (sortOption === "rating") return b.rating - a.rating;
            return b.dateAdded - a.dateAdded;
        });

        return result;
    }, [entries, searchTerm, filterType, sortOption, showFavorites]);

    return (
        <PageLayout title="Your Entries">
            <StyledToolbar>
                <StyledSearchArea>
                    <SearchBar value={searchTerm} onChange={setSearchTerm} />
                </StyledSearchArea>
                <StyledFilterArea>
                    <FilterSort
                        filterType={filterType}
                        onFilterChange={setFilterType}
                        sortOption={sortOption}
                        onSortChange={setSortOption}
                        showFavorites={showFavorites}
                        onToggleFavorites={() => setShowFavorites(!showFavorites)}
                    />
                </StyledFilterArea>
            </StyledToolbar>
            <EntryGrid
                entries={filteredEntries}
                onDelete={deleteEntry}
                onToggleFavorite={toggleFavorite}
            />
        </PageLayout>
    );
}
