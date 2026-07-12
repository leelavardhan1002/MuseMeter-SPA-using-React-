import type { CategoryConfig, EntryType } from "../types";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MovieIcon from "@mui/icons-material/Movie";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";

export const CATEGORY_CONFIG: CategoryConfig[] = [
    { type: "book", label: "Book", color: "info", Icon: AutoStoriesIcon },
    { type: "movie", label: "Movie", color: "warning", Icon: MovieIcon },
    { type: "poem", label: "Poem", color: "tertiary", Icon: HistoryEduIcon },
    { type: "music", label: "Music", color: "success", Icon: MusicNoteIcon },
    {
        type: "theatre-play",
        label: "Theatre Play",
        color: "secondary",
        Icon: TheaterComedyIcon,
    },
];

export const ENTRY_TYPE_OPTIONS: { value: EntryType; label: string }[] =
    CATEGORY_CONFIG.map((c) => ({ value: c.type, label: c.label }));
