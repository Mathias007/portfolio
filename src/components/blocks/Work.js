import React, { useState } from "react";

import Button from "./universal/Button";
import BlockHeading from "./heading/BlockHeading";

import WorkBox from "./boxes/WorkBox";
import WorkListElement from "./boxes/WorkListElement";

import { workData } from "../../data/workData";

export default function Work() {
    const [isActive, setActive] = useState(false);

    const toggleProjectsVisibility = () => {
        setActive(!isActive);
    };

    return (
        <article className="portfolio__block work" id="work">
            <BlockHeading
                headingBlockClass="work__heading"
                headingTitle="Przegląd projektów"
                headingDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione beatae suscipit, accusantium perferendis porro,
                incidunt at nisi tenetur ducimus optio, architecto alias
                sint ullam labore consequuntur! Iure inventore illo ullam."
            />

            <div className="work__content block-content">
                {workData.map((element) => {
                    const {
                        id,
                        projectTitle,
                        projectPreview,
                        projectCode,
                        projectCategory,
                        projectImage,
                    } = element;

                    if (projectCategory === "website")
                        return (
                            <WorkBox
                                key={id}
                                id={id}
                                projectTitle={projectTitle}
                                projectPreview={projectPreview}
                                projectCode={projectCode}
                                imagePath={projectImage}
                                imageDescription={projectTitle}
                            />
                        );
                    else return null;
                })}
            </div>
            {isActive ? (
                <>
                    <div className="work__addition block-heading">
                        <Button
                            className="work__button button"
                            href="#work"
                            text={isActive ? "Pokaż mniej" : "Pokaż więcej"}
                            onClick={toggleProjectsVisibility}
                        />
                    </div>
                    <div className="work__content block-content">
                        {workData.map((element) => {
                            const {
                                id,
                                projectTitle,
                                projectPreview,
                                projectCode,
                                projectCategory,
                            } = element;

                            if (projectCategory !== "website")
                                return (
                                    <WorkListElement
                                        key={id}
                                        id={id}
                                        projectTitle={projectTitle}
                                        projectPreview={projectPreview}
                                        projectCode={projectCode}
                                        imagePath={
                                            projectCategory === "oop-game"
                                                ? "work/webdev2.svg"
                                                : projectCategory ===
                                                  "elder-js-project"
                                                ? "work/webdev1.svg"
                                                : projectCategory ===
                                                  ("react-project" ||
                                                      "big-project")
                                                ? "work/react.svg"
                                                : "work/javascript.svg"
                                        }
                                        imageDescription={projectTitle}
                                    />
                                );
                            else return null;
                        })}
                    </div>
                </>
            ) : null}
            <div className="work__addition block-heading">
                <Button
                    className="work__button button"
                    href="#work"
                    text={isActive ? "Pokaż mniej" : "Pokaż więcej"}
                    onClick={toggleProjectsVisibility}
                />
            </div>
        </article>
    );
}
