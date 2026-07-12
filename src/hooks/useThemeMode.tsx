import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextValue {
    mode: ThemeMode;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({ mode: "light", toggle: () => {} });

const TRANSITION_DURATION = 600;

export function ThemeModeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>(() => {
        const stored = localStorage.getItem("musemeter-theme");
        if (stored === "dark" || stored === "light") return stored;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("musemeter-theme", mode);
        document.documentElement.setAttribute("data-theme", mode);
    }, [mode]);

    const toggle = useCallback(() => {
        const body = document.body;
        const computed = getComputedStyle(body);

        // Snapshot current background onto an overlay
        const overlay = document.createElement("div");
        overlay.className = "theme-crossfade-overlay";
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 9999;
            pointer-events: none;
            background-color: ${computed.backgroundColor};
            background-image: ${computed.backgroundImage};
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            opacity: 1;
            transition: opacity ${TRANSITION_DURATION}ms ease;
        `;
        document.body.appendChild(overlay);

        // Toggle theme — body gets new background underneath the overlay
        setMode((m) => (m === "light" ? "dark" : "light"));

        // Start fading out the overlay on next frame
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                overlay.style.opacity = "0";
            });
        });

        // Clean up overlay after transition
        setTimeout(() => {
            overlay.remove();
        }, TRANSITION_DURATION + 50);
    }, []);

    return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

export const useThemeMode = () => useContext(ThemeContext);
