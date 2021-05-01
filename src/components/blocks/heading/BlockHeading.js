import React from "react";

export default function BlockHeading(props) {
    const {
        headingBlockClass,
        isHeadingWhite,
        headingTitle,
        headingDescription,
    } = props;

    return (
        <header
            className={`${headingBlockClass} block-heading ${
                isHeadingWhite ? "block-heading--white" : ""
            }`}
        >
            <h2 className="block-heading__header">{headingTitle}</h2>
            {headingDescription ? (
                <p className="block-heading__text">{headingDescription}</p>
            ) : null}
        </header>
    );
}
