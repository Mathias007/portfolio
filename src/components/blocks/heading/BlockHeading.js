import React from "react";

export default function BlockHeading(props) {
    const {
        headingBlockClass,
        isHeadingWhite,
        headingTitle,
        headingDescription,
    } = props;

    const headingClassName = `${headingBlockClass} block-heading ${
        isHeadingWhite ? "block-heading--white" : ""
    }`;

    return (
        <header className={headingClassName}>
            <h2 className="block-heading__header">{headingTitle}</h2>
            {headingDescription ? (
                <p className="block-heading__text">{headingDescription}</p>
            ) : null}
        </header>
    );
}
