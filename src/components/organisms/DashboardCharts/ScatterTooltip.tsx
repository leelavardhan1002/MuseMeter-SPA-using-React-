import { useTheme } from "@mui/material/styles";

interface ScatterTooltipPayload {
    date: number;
    type: string;
    rating: number;
}

interface ScatterTooltipProps {
    active?: boolean;
    payload?: Array<{ payload: ScatterTooltipPayload }>;
}

export function ScatterTooltip({ active, payload }: ScatterTooltipProps) {
    const theme = useTheme();

    if (!active || !payload?.length) {
        return null;
    }

    const data = payload[0]!.payload;

    return (
        <div
            style={{
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "6px",
                padding: "10px",
                boxShadow: theme.palette.elevation.shadowMd,
                color: theme.palette.text.primary,
            }}
        >
            <p>
                <strong>Date:</strong> {new Date(data.date).toLocaleDateString("en-GB")}
            </p>
            <p>
                <strong>Rating:</strong> {data.rating}
            </p>
            <p>
                <strong>Type:</strong> {data.type}
            </p>
        </div>
    );
}
