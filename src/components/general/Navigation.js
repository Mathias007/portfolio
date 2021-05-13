import React from "react";

import NavElement from "./navigation/NavElement";

export default function Navigation(props) {
    const { isActive, onClick } = props;

    const navigationClassName = `navigation__list ${isActive ? "active" : ""}`;

    return (
        <nav className="site-header__menu navigation">
            <ul className={navigationClassName}>
                <NavElement path="/" title="Start" onClick={onClick} />
                <NavElement path="about" title="O mnie" onClick={onClick}/>
                <NavElement path="timeline" title="Oś czasu" onClick={onClick}/>
                <NavElement path="work" title="Projekty"onClick={onClick} />
                <NavElement path="services" title="Usługi"onClick={onClick} />
                <NavElement path="inspirations" title="Inspiracje"onClick={onClick} />
                <NavElement path="contact" title="Kontakt"onClick={onClick} />
            </ul>
        </nav>
    );
}
