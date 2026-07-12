import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ScatterChart,
    Scatter,
    ZAxis,
} from "recharts";
import type { MuseMeterEntry } from "../../../types";
import { useDashboardData } from "../../../hooks/useDashboardData";
import { CATEGORY_CONFIG } from "../../../constants/categories";
import { lightTokens } from "../../../theme/tokens/finalTokens";
import { StatCard } from "../../molecules";
import { ScatterTooltip } from "./ScatterTooltip";
import AddIcon from "@mui/icons-material/Add";
import {
    StyledContainer,
    StyledSummaryRow,
    StyledChartGrid,
    StyledChartCard,
    StyledChartTitle,
} from "./DashboardCharts.styled";
import { Button } from "../../atoms";
import { StyledIntro } from "../../../pages/Home/Home.styled";
import { useNavigate } from "react-router-dom";

interface DashboardChartsProps {
    entries: MuseMeterEntry[];
}

export function DashboardCharts({ entries }: DashboardChartsProps) {
    const data = useDashboardData(entries);
    const navigate = useNavigate();

    return (
        <StyledContainer>
            <StyledSummaryRow>
                {CATEGORY_CONFIG.map((cat) => (
                    <StatCard
                        key={cat.type}
                        label={cat.label}
                        count={data.typeCounts[cat.type]}
                        color={cat.color}
                        Icon={cat.Icon}
                        glowIntensity={0.1}
                    />
                ))}
            </StyledSummaryRow>

            {entries.length > 0 ? (
                <StyledChartGrid>
                    <StyledChartCard>
                        <StyledChartTitle>Entries by Type</StyledChartTitle>
                        <PieChart width={280} height={280}>
                            <Pie
                                data={data.pieData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                label
                            >
                                {data.pieData.map((item) => (
                                    <Cell key={item.name} fill={item.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </StyledChartCard>

                    <StyledChartCard>
                        <StyledChartTitle>Average Rating per Type</StyledChartTitle>
                        <BarChart width={280} height={280} data={data.ratingData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="type" />
                            <YAxis domain={[0, 5]} />
                            <Tooltip />
                            <Bar dataKey="avgRating" fill={lightTokens.text.secondary} />
                        </BarChart>
                    </StyledChartCard>

                    <StyledChartCard>
                        <StyledChartTitle>Logging Activity Over Time</StyledChartTitle>
                        <ScatterChart width={280} height={280}>
                            <CartesianGrid />
                            <XAxis
                                dataKey="date"
                                type="number"
                                domain={["auto", "auto"]}
                                tick={false}
                            />
                            <YAxis
                                dataKey="typeIndex"
                                type="number"
                                tickFormatter={(index: number) =>
                                    CATEGORY_CONFIG[index]?.label ?? ""
                                }
                            />
                            <ZAxis dataKey="rating" range={[50, 200]} />
                            <Tooltip
                                cursor={{ strokeDasharray: "3 3" }}
                                content={<ScatterTooltip />}
                            />
                            <Scatter
                                name="Entries"
                                data={data.scatterPlotData}
                                fill={lightTokens.tertiary.main}
                            />
                        </ScatterChart>
                    </StyledChartCard>
                </StyledChartGrid>
            ) : (
                <StyledIntro sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="gold"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem",
                            fontSize: "16px",
                        }}
                        onClick={() => navigate("/add")}
                    >
                        <AddIcon fontSize="medium" /> Add Entry
                    </Button>
                </StyledIntro>
            )}
        </StyledContainer>
    );
}
