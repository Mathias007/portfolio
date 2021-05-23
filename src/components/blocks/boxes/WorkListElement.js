import React from "react";

import Button from "../universal/Button";
import Image from "../universal/Image";

export default function WorkListElement(props) {
    const {
        projectTitle,
        projectPreview,
        projectCode,
        projectLanguage,
        projectDescription,
    } = props;

    const imagePath =
        projectLanguage === "HTML"
            ? "work/webdev2.svg"
            : projectLanguage === "CSS"
            ? "work/webdev1.svg"
            : projectLanguage === "JavaScript"
            ? "work/javascript.svg"
            : "work/website.svg";

    return (
        <section className="work-box work-box--more">
            <h3 className="work-box__title">{projectTitle}</h3>
            <Image
                imageClass="work-box__image"
                imagePath={imagePath}
                imageDescription={projectDescription}
            />
            <h5 className="work-box__description">{projectDescription}</h5>
            <div className="work-box__buttons">
                <Button
                    className="button button--work"
                    href={projectCode}
                    text="Kod"
                    target="_blank"
                    rel="noreferrer"
                />
                {projectPreview ? (
                    <Button
                        className="button button--work"
                        href={projectPreview}
                        text="Demo"
                        target="_blank"
                        rel="noreferrer"
                    />
                ) : null}
            </div>
        </section>
    );
}
