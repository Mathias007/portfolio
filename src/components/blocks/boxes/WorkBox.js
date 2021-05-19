import React from "react";

import Button from "../universal/Button";
import Image from "../universal/Image";

import config from "../../../config/config";
const { GITHUB_URL } = config;

export default function WorkBox(props) {
    const {
        projectTitle,
        projectPreview,
        projectCode,
        imagePath,
        imageDescription,
    } = props;

    return (
        <section className="work-box">
            <h3 className="work-box__title">{projectTitle}</h3>

            <a href={projectPreview} className="work-box__link">
                <Image
                    imageClass="work-box__image"
                    imagePath={imagePath}
                    imageDescription={imageDescription}
                />
            </a>
            {projectCode ? (
                <Button
                    className="button button--work"
                    href={`${GITHUB_URL}${projectCode}`}
                    text="Zobacz kod"
                />
            ) : null}
        </section>
    );
}
