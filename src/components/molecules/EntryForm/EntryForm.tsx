import { useState } from "react";
import type { EntryType } from "../../../types";
import { Input, Select, TextArea, Rating, Button } from "../../atoms";
import { ENTRY_TYPE_OPTIONS } from "../../../constants/categories";
import { StyledForm, StyledRatingGroup } from "./EntryForm.styled";

interface EntryFormProps {
    onSubmit: (data: {
        title: string;
        type: EntryType;
        displayType: string;
        rating: number;
        thoughts: string;
    }) => void;
}

export function EntryForm({ onSubmit }: EntryFormProps) {
    const [title, setTitle] = useState("");
    const [type, setType] = useState<EntryType>("book");
    const [rating, setRating] = useState(0);
    const [thoughts, setThoughts] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const option = ENTRY_TYPE_OPTIONS.find((o) => o.value === type);
        onSubmit({
            title,
            type,
            displayType: option?.label ?? type,
            rating,
            thoughts,
        });
        setTitle("");
        setType("book");
        setRating(0);
        setThoughts("");
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title (e.g. book, movie, song...)"
                required
            />
            <Select
                label="Type"
                options={ENTRY_TYPE_OPTIONS}
                value={type}
                onChange={(e) => setType(e.target.value as EntryType)}
            />
            <StyledRatingGroup>
                <label>Rating (1-5)</label>
                <Rating value={rating} onChange={setRating} />
            </StyledRatingGroup>
            <TextArea
                label="Your Thoughts"
                rows={3}
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
                placeholder="Share your review or reflection..."
            />
            <Button type="submit" variant="gold">
                Add Entry
            </Button>
        </StyledForm>
    );
}
