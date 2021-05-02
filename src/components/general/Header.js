import React, { useState, useEffect } from "react";

import Navigation from "./Navigation";

export default function Header() {
    const [isSticky, setSticky] = useState(false);
    const [isActive, setActive] = useState(false);

    const toggleStickyHeader = () => {
        if (window.scrollY > 0) setSticky(!isSticky);
        else setSticky(isSticky);
    };

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", toggleStickyHeader);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", toggleStickyHeader);
        };
    }, []);

    const toggleMenu = () => {
        setActive(!isActive);
    };

    return (
        <header className={`site-header ${isSticky ? "sticky" : ""}`}>
            <a href="#" className="site-header__logo">
                Portfolio
            </a>
            <div
                className={`site-header__toggle ${isActive ? "active" : ""}`}
                onClick={toggleMenu}
            ></div>
            <Navigation isActive={isActive} />
        </header>
    );
}
