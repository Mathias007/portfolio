import React from "react";

export default function Button(props) {
    const { className, href, text, onClick } = props;

    const buttonClassName = className ? className : "button";

    if (onClick)
        return (
            <button href={href} className={buttonClassName} onClick={onClick}>
                {text}
            </button>
        );
    else
        return (
            <a href={href} className={buttonClassName} {...props}>
                {text}
            </a>
        );
}
