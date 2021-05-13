import React, { useState, useEffect } from "react";

import Button from "../blocks/universal/Button";
import Icon from "../blocks/universal/Icon";
import Navigation from "./Navigation";

export default function Header() {
    const [isSticky, setSticky] = useState(false);
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        const toggleStickyHeader = () => {
            if (window.scrollY > 0) setSticky(!isSticky);
            else setSticky(isSticky);
        };

        function watchScroll() {
            window.addEventListener("scroll", toggleStickyHeader);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", toggleStickyHeader);
        };
    }, [isSticky]);

    const toggleMenu = () => {
        setActive(!isActive);
    };

    const headerClassName = `site-header ${isSticky ? "sticky" : ""}`;

    return (
        <header className={headerClassName}>
            <Button className="site-header__logo" href="/" text="Portfolio" />
            <Icon
                icon={`${isActive ? "times" : "bars"}`}
                className="site-header__toggle"
                onClick={toggleMenu}
            />
            <Navigation isActive={isActive} onClick={toggleMenu} />
        </header>
    );
}
