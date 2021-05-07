import React from "react";

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
            <a href={href} className={className ? className : "button"}>
                {text}
            </a>
        );
}
