import logo from "../../../assets/logo.png";
import {
    LogoImage,
    StyledAppbar,
    StyledContainer,
    StyledLogo,
    StyledToggleButton,
    StyledToggleButtonGroup,
    StyledToolbar,
    ThemeToggleButton,
} from "./Navbar.style";
import { useNavigate, useLocation } from "react-router-dom";
import { useThemeMode } from "../../../hooks/useThemeMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const routes = [
    { name: "Home", path: "/" },
    { name: "Add Entry", path: "/add" },
    { name: "View Entries", path: "/view" },
];

export function Navbar({ sticky }: { sticky: boolean }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { mode, toggle } = useThemeMode();

    return (
        <StyledAppbar $isSticky={sticky}>
            <StyledContainer maxWidth="xl" $isSticky={sticky}>
                <StyledToolbar disableGutters $isSticky={sticky}>
                    <StyledLogo startIcon={<LogoImage src={logo} alt="MuseMeter Logo" />}>
                        Muse Meter
                    </StyledLogo>
                    <StyledToggleButtonGroup
                        exclusive
                        value={pathname}
                        onChange={(_, value) => {
                            navigate(value);
                        }}
                    >
                        {routes.map((route) => (
                            <StyledToggleButton
                                key={route.path}
                                value={route.path}
                                disableTouchRipple={pathname === route.path}
                            >
                                {route.name}
                            </StyledToggleButton>
                        ))}
                    </StyledToggleButtonGroup>
                    <ThemeToggleButton
                        onClick={toggle}
                        aria-label="Toggle theme"
                    >
                        {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                    </ThemeToggleButton>
                </StyledToolbar>
            </StyledContainer>
        </StyledAppbar>
    );
}
