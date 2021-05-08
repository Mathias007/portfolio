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
                headingDescription="W trosce o ciągły rozwój swoich umiejętności, a także ze względu na to, że sprawia mi to sporo frajdy, regularnie tworzę większe i mniejsze projekty z wykorzystaniem znanych mi technologii. Niektóre z nich są już rozwijane od wielu lat, inne już w niedalekiej przyszłości mogą stanowić interesujące dla użytkowników aplikacje webowe. Kod projektów zamieszczam na Githubie, dla większości z nich przygotowuję też wersje demonstracyjne (Preview), by obejrzeć efekty moich prac."
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
