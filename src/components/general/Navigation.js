import React from "react";

import NavElement from "./navigation/NavElement";

import { paths } from "../../config/names";
const {
    home,
    about,
    contact,
    projects,
    technologies,
    timeline,
    inspirations,
} = paths;

export default function Navigation(props) {
    const { isActive, onClick } = props;

    const navigationClassName = `navigation__list ${isActive ? "active" : ""}`;

    return (
        <nav className="site-header__menu navigation">
            <ul className={navigationClassName}>
                <NavElement path={home} title="Start" onClick={onClick} />
                <NavElement path={about} title="O mnie" onClick={onClick}/>
                <NavElement path={timeline} title="Oś czasu" onClick={onClick}/>
                <NavElement path={projects} title="Projekty"onClick={onClick} />
                <NavElement path={technologies} title="Usługi"onClick={onClick} />
                <NavElement path={inspirations} title="Inspiracje"onClick={onClick} />
                <NavElement path={contact} title="Kontakt"onClick={onClick} />
            </ul>
        </nav>
    );
}
