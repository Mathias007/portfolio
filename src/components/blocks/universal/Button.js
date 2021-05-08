import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
    const { className, href, text, onClick } = props;

    if (onClick)
        return (
            <button
                href={href}
                className={className ? className : "button"}
                onClick={onClick}
            >
                {text}
            </button>
        );
    else
        return (
            <Link to={href} className={className ? className : "button"}>
                {text}
            </Link>
        );
}
