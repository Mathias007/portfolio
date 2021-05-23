import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";

import Button from "./universal/Button";
import BlockHeading from "./heading/BlockHeading";

import Loading from "./universal/Loading";

import config from "../../config/config";
import { paths } from "../../config/names";

const { SERVER_URL, GITHUB_API } = config;
const { projects } = paths;

const WorkBox = React.lazy(() => import("./boxes/WorkBox"));
const WorkListElement = React.lazy(() => import("./boxes/WorkListElement"));

export default function Work() {
    const [isActive, setActive] = useState(false);
    const [dataLoading, setDataLoading] = useState(false);
    const [projectsData, setProjectsData] = useState([]);
    const [githubData, setGithubData] = useState([]);

    useEffect(() => {
        setDataLoading(true);

        async function fetchProjectsData() {
            const result = await axios(`${SERVER_URL}${projects}`);

            setProjectsData(result.data.projectsData);
        }

        async function fetchGithubData() {
            const result = await axios(`${GITHUB_API}?per_page=100`);

            setGithubData(result.data);
        }

        if (dataLoading) {
            fetchProjectsData();
            fetchGithubData();
        }
        return () => {
            setDataLoading(false);
        };
    }, [projectsData, dataLoading]);

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
                {projectsData.map((element) => {
                    const {
                        _id,
                        projectTitle,
                        projectPreview,
                        projectCode,
                        projectCategory,
                        projectImage,
                    } = element;

                    if (projectCategory === "website")
                        return (
                            <Suspense fallback={<Loading />} key={_id}>
                                <WorkBox
                                    key={_id}
                                    id={_id}
                                    projectTitle={projectTitle}
                                    projectPreview={projectPreview}
                                    projectCode={projectCode}
                                    imagePath={projectImage}
                                    imageDescription={projectTitle}
                                />
                            </Suspense>
                        );
                    else return null;
                })}
            </div>
            {isActive ? (
                <>
                    <div className="work__addition block-heading">
                        <Button
                            className="work__button button"
                            text={isActive ? "Pokaż mniej" : "Pokaż więcej"}
                            onClick={toggleProjectsVisibility}
                        />
                    </div>
                    <div className="work__content block-content">
                        {githubData
                            .sort(function (a, b) {
                                return (
                                    new Date(b.created_at) -
                                    new Date(a.created_at)
                                );
                            })
                            .map((element) => {
                                const {
                                    description,
                                    homepage,
                                    html_url,
                                    id,
                                    language,
                                    name,
                                } = element;

                                return (
                                    <Suspense fallback={<Loading />} key={id}>
                                        <WorkListElement
                                            key={id}
                                            id={id}
                                            projectTitle={name}
                                            projectPreview={homepage}
                                            projectCode={html_url}
                                            projectLanguage={language}
                                            projectDescription={description}
                                        />
                                    </Suspense>
                                );
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
