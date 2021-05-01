import React from "react";

import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="site-header">
            <a href="#" className="site-header__logo">
                Portfolio
            </a>
            <div className="site-header__toggle toggle"></div>
            <Navigation />
        </header>
    );
}
