import React from "react";

import NavElement from "./navigation/NavElement";

export default function Navigation(props) {
    const { isActive } = props;

    const navigationClassName = `navigation__list ${isActive ? "active" : ""}`;

    return (
        <nav className="site-header__menu navigation">
            <ul className={navigationClassName}>
                <NavElement path="/" title="Start" />
                <NavElement path="about" title="O mnie" />
                <NavElement path="timeline" title="Oś czasu" />
                <NavElement path="work" title="Projekty" />
                <NavElement path="services" title="Usługi" />
                <NavElement path="inspirations" title="Inspiracje" />
                <NavElement path="contact" title="Kontakt" />
            </ul>
        </nav>
    );
}
