import React from "react";

import NavElement from "./navigation/NavElement";

export default function Navigation(props) {
    const { isActive } = props;

    return (
        <nav className="site-header__menu navigation">
            <ul className={`navigation__list ${isActive ? "active" : ""}`}>
                <NavElement path="#home" title="Start" />
                <NavElement path="#about" title="O mnie" />
                <NavElement path="#timeline" title="Oś czasu" />
                <NavElement path="#work" title="Projekty" />
                <NavElement path="#services" title="Usługi" />
                <NavElement path="#testimonial" title="Inspiracje" />
                <NavElement path="#contact" title="Kontakt" />
            </ul>
        </nav>
    );
}
