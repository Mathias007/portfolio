import React from "react";
import ReactHtmlParser from "react-html-parser";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import Icon from "./universal/Icon";
import BlockHeading from "./heading/BlockHeading";

import timelineElements from "../../data/timeData";

export default function Timeline() {
    const fantasyIconStyles = {
        background: "#06D6A0",
    };
    const workIconStyles = {
        background: "red",
    };
    const educationIconStyles = {
        background: "#f9c74f",
    };

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

                    return (
                        <VerticalTimelineElement
                            key={id}
                            date={date}
                            dateClassName="timeline__date"
                            iconStyle={
                                category === "work"
                                    ? workIconStyles
                                    : category === "education"
                                    ? educationIconStyles
                                    : fantasyIconStyles
                            }
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
                                <a
                                    className={`button timeline__button ${
                                        category === "work"
                                            ? "timeline__button--work"
                                            : category === "education"
                                            ? "timeline__button--education"
                                            : "timeline__button--fantasy"
                                    } `}
                                    href={site}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {element.buttonText}
                                </a>
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </article>
    );
}
