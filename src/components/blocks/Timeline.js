import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import Icon from "./universal/Icon";
import Button from "./universal/Button";
import BlockHeading from "./heading/BlockHeading";

import config from "../../config/config";
import { paths } from "../../config/names";

const { SERVER_URL } = config;
const { timeline } = paths;

export default function Timeline() {
    const [dataLoading, setDataLoading] = useState(false);
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        setDataLoading(true);

        async function fetchTimelineData() {
            const result = await axios(`${SERVER_URL}${timeline}`);

            setTimelineData(result.data.timelineData);
        }

        if (dataLoading) {
            fetchTimelineData();
        }
        return () => {
            setDataLoading(false);
        };
    }, [timelineData, dataLoading]);

    return (
        <article className="portfolio__block timeline" id="timeline">
            <BlockHeading
                headingBlockClass="timeline__heading"
                headingTitle="Moja historia na osi czasu"
                isHeadingWhite
            />
            <VerticalTimeline>
                {timelineData.map((element) => {
                    const {
                        _id,
                        title,
                        location,
                        site,
                        description,
                        buttonText,
                        date,
                        icon,
                        category,
                    } = element;

                    let showButton =
                        buttonText !== undefined &&
                        buttonText !== null &&
                        buttonText !== "";

                    const iconClassName = `timeline__icon ${
                        category === "work"
                            ? "timeline__icon--work"
                            : category === "education"
                            ? "timeline__icon--education"
                            : "timeline__icon--fantasy"
                    }`;

                    const buttonClassName = `button timeline__button ${
                        category === "work"
                            ? "timeline__button--work"
                            : category === "education"
                            ? "timeline__button--education"
                            : "timeline__button--fantasy"
                    } `;

                    return (
                        <VerticalTimelineElement
                            key={_id}
                            date={date}
                            dateClassName="timeline__date"
                            iconClassName={iconClassName}
                            icon={
                                <Icon icon={icon} className="timeline__icon" />
                            }
                        >
                            <h3 className="vertical-timeline-element-title timeline__title">
                                {title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle timeline__subtitle">
                                {site ? (
                                    <a href={site}>{location}</a>
                                ) : (
                                    location
                                )}
                            </h5>
                            <p id="description timeline__description">
                                {ReactHtmlParser(description)}
                            </p>
                            {showButton && (
                                <Button
                                    className={buttonClassName}
                                    href={site}
                                    text={buttonText}
                                    target="_blank"
                                    rel="noreferrer"
                                />
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </article>
    );
}
