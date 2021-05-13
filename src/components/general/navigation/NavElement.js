import React from "react";
import { NavLink } from "react-router-dom";

export default function NavElement(props) {
    const { path, title, onClick } = props;

    return (
        <li className="navigation__element">
            <NavLink to={path} className="navigation__link" onClick={onClick}>
                {title}
            </NavLink>
        </li>
    );
}
