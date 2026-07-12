import { styled } from "@mui/material/styles";

export const AppContainer = styled("div")(({ theme }) => ({
    maxWidth: "1960px",
    margin: "0 auto",
    padding: `${theme.spacingTokens.space6xl} ${theme.spacingTokens.spaceS} ${theme.spacingTokens.spaceXl}`,
}));
