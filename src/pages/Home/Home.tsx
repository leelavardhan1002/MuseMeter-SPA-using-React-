import { useEffect } from "react";
import { useEntryStore } from "../../store/useEntryStore";
import { DashboardCharts } from "../../components/organisms";
import {
    StyledHome,
    StyledIntro,
    StyledIntroInfo,
    StyledIntroThings,
} from "./Home.styled";
import { Typography } from "@mui/material";
import { useThemeMode } from "../../hooks/useThemeMode";
import darkModeThings from "../../assets/darkmode_things.png";
import lightModeThings from "../../assets/lightmode_things.png";

export function Home() {
    const entries = useEntryStore((s) => s.entries);
    const initialize = useEntryStore((s) => s.initialize);
    const { mode } = useThemeMode();
    const isDark = mode === "dark";

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <StyledHome>
            <StyledIntro>
                <StyledIntroInfo>
                    <Typography
                        variant="h4"
                        sx={{ fontFamily: "ui-monospace", fontWeight: "bold" }}
                    >
                        Welcome to MuseMeter
                    </Typography>
                    <Typography variant="body2">
                        Track and relive the art that moves you - books,
                        <br /> movies, poems, and more.
                    </Typography>
                </StyledIntroInfo>
                <StyledIntroThings>
                    <img
                        src={isDark ? darkModeThings : lightModeThings}
                        width={"100%"}
                        style={{ maxWidth: "340px" }}
                        height="auto"
                    />{" "}
                </StyledIntroThings>
            </StyledIntro>
            <DashboardCharts entries={entries} />
        </StyledHome>
    );
}
