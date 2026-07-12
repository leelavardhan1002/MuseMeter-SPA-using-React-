import {
    Box,
    Button,
    Container,
    IconButton,
    ToggleButton,
    toggleButtonClasses,
    ToggleButtonGroup,
    toggleButtonGroupClasses,
    Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { depthStyle } from "../../../utils/depth/depth";

export const StyledAppbar = styled(Box)<{ $isSticky: boolean }>(
    ({ theme, $isSticky }) => ({
        width: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: "1960px",
        position: "fixed",
        top: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
        backgroundImage: "unset",
        transition: "all 0.3s cubic-bezier(0.2, 0, 0, 1)",
        zIndex: "1011",
        ...($isSticky && {
            boxShadow: theme.palette.elevation.shadowMd,
        }),
    })
);

export const StyledContainer = styled(Container)<{ $isSticky: boolean }>(
    ({ theme, $isSticky }) => ({
        transition: "padding 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
        [theme.breakpoints.up("sm")]: {
            padding: $isSticky ? "0rem" : "0.75rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0rem",
        },
    })
);

export const StyledToolbar = styled(Toolbar)<{ $isSticky: boolean }>(
    ({ theme, $isSticky }) => ({
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
        transition: "border-radius 0.3s ease-in-out, box-shadow 0.3s ease",
        padding: "0.5rem",
        ...depthStyle(1, theme.palette.depth),
        [theme.breakpoints.up("sm")]: {
            borderRadius: $isSticky ? "0rem" : "1rem",
        },
        [theme.breakpoints.down("sm")]: {
            borderRadius: "0rem",
        },
    })
);

export const LogoImage = styled("img")({
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "50%",
});

export const StyledLogo = styled(Button)({
    textTransform: "capitalize",
    borderRadius: "0.5rem",
});

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    gap: "0.5rem",
    height: "2.5rem",
    [`& .${toggleButtonGroupClasses.firstButton}`]: {
        borderRadius: "3.125rem 0.5rem 0.5rem 3.125rem",
    },
    [`& .${toggleButtonGroupClasses.middleButton}, & .${toggleButtonGroupClasses.lastButton}`]:
        {
            borderRadius: "0.5rem",
            margin: "0rem",
            borderLeft: `1px solid ${theme.palette.primary.main}`,
        },
    [`& .${toggleButtonGroupClasses.lastButton}`]: {
        borderRadius: "0.5rem 3.125rem 3.125rem 0.5rem",
    },
}));

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    transition: "all 0.15s ease",
    "&:hover": {
        backgroundColor: theme.alpha(theme.palette.primary.light, 0.1),
    },
    [`&.${toggleButtonClasses.selected}`]: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        ...depthStyle(1, theme.palette.depth),

        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

export const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
    width: "48px",
    height: "48px",
    color: theme.palette.text.primary,
    fontSize: "1.25rem",
    marginLeft: "0.5rem",
    borderRadius: "0.75rem",
    transition: "all 0.15s ease",
    ...depthStyle(1, theme.palette.depth),
}));
