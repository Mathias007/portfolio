import React from "react";

import Navigation from "./Navigation";

export default function Header() {
    return (
        <header class="site-header">
            <a href="#" class="site-header__logo">
                Portfolio
            </a>
            <div class="site-header__toggle toggle"></div>
            <Navigation />
        </header>
    );
}
