import type { MuseMeterEntry } from "../../../types";
import { Button, Rating } from "../../atoms";
import {
    StyledCard,
    StyledTitle,
    StyledSubtitle,
    StyledThoughts,
    StyledFavIcon,
    StyledActions,
} from "./EntryCard.styled";

interface EntryCardProps {
    entry: MuseMeterEntry;
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
}

export function EntryCard({ entry, onDelete, onToggleFavorite }: EntryCardProps) {
    return (
        <StyledCard>
            <StyledTitle>
                {entry.title}{" "}
                {entry.isFavorite && <StyledFavIcon>&#11088;</StyledFavIcon>}
            </StyledTitle>
            <StyledSubtitle>{entry.displayType}</StyledSubtitle>
            <Rating value={entry.rating} readonly />
            <StyledThoughts>{entry.thoughts}</StyledThoughts>
            <StyledActions>
                <Button
                    variant={entry.isFavorite ? "warning" : "outline-warning"}
                    size="sm"
                    onClick={() => onToggleFavorite(entry.id)}
                >
                    {entry.isFavorite ? "Unfavorite" : "Favorite"}
                </Button>
                <Button variant="danger" size="sm" onClick={() => onDelete(entry.id)}>
                    Delete
                </Button>
            </StyledActions>
        </StyledCard>
    );
}
