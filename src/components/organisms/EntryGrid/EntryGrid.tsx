import type { MuseMeterEntry } from "../../../types";
import { EntryCard } from "../EntryCard";
import { StyledGrid } from "./EntryGrid.styled";

interface EntryGridProps {
    entries: MuseMeterEntry[];
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
}

export function EntryGrid({ entries, onDelete, onToggleFavorite }: EntryGridProps) {
    if (entries.length === 0) {
        return <p>No entries found.</p>;
    }

    return (
        <StyledGrid>
            {entries.map((entry) => (
                <EntryCard
                    key={entry.id}
                    entry={entry}
                    onDelete={onDelete}
                    onToggleFavorite={onToggleFavorite}
                />
            ))}
        </StyledGrid>
    );
}
