import React from "react";

import Button from "../universal/Button";
import Image from "../universal/Image";

import config from "../../../config/config";
const { GITHUB_URL, PROJECTS_ROOT_URL } = config;

export default function WorkListElement(props) {
    const {
        projectTitle,
        projectPreview,
        projectCode,
        imagePath,
        imageDescription,
    } = props;

    return (
        <section className="work-box work-box--more">
            <h3 className="work-box__title">{projectTitle}</h3>
            <Image
                imageClass="work-box__image"
                imagePath={imagePath}
                imageDescription={imageDescription}
            />
            <div className="work-box__buttons">
                <Button
                    className="button button--work"
                    href={`${GITHUB_URL}${projectCode}`}
                    text="Kod"
                />
                {projectPreview ? (
                    <Button
                        className="button button--work"
                        href={`${PROJECTS_ROOT_URL}${projectCode}`}
                        text="Demo"
                    />
                ) : null}
            </div>
        </section>
    );
}
