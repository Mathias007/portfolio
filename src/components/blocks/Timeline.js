import React from "react";
import ReactHtmlParser from "react-html-parser";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import Icon from "./universal/Icon";
import Button from "./universal/Button";
import BlockHeading from "./heading/BlockHeading";

import { timelineElements } from "../../data/timeData";

export default function Timeline() {
    return (
        <article className="portfolio__block timeline" id="timeline">
            <BlockHeading
                headingBlockClass="timeline__heading"
                headingTitle="Moja historia na osi czasu"
                isHeadingWhite
            />
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    const {
                        id,
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
                            key={id}
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
