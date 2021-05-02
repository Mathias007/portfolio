import React from "react";

export default function Button(props) {
    const { className, href, text } = props;

    return (
        <a href={href} className={className ? className : "button"}>
            {text}
        </a>
    );
}
