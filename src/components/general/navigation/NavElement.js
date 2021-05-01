import React from "react";

export default function NavElement(props) {
    const { path, title } = props;

    return (
        <li className="navigation__element">
            <a href={path} className="navigation__link">
                {title}
            </a>
        </li>
    );
}
