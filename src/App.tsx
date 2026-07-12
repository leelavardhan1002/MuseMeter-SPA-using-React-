import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/organisms";
import { Home } from "./pages/Home/Home";
import { AddEntry } from "./pages/AddEntry";
import { ViewEntries } from "./pages/ViewEntries";
import { useEffect, useState } from "react";
import { AppContainer } from "./App.styled";

export function App() {
    const [sticky, setSticky] = useState<boolean>(false);

    const handleScroll = () => {
        const scrollToTop = window.pageYOffset || document.documentElement.scrollTop;
        const isSticky = scrollToTop > 20;
        if (isSticky === !sticky) {
            setSticky(!sticky);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sticky]);
    return (
        <>
            <Navbar sticky={sticky} />
            <AppContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddEntry />} />
                    <Route path="/view" element={<ViewEntries />} />
                </Routes>
            </AppContainer>
        </>
    );
}
