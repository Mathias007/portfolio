import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";

import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import Loading from "./universal/Loading";
import BlockHeading from "./heading/BlockHeading";

import config from "../../config/config";
import { paths } from "../../config/names";

const TimelineElement = React.lazy(() => import("./boxes/TimelineElement"));

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
    }, [dataLoading]);

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

                    return (
                        <Suspense fallback={<Loading />} key={_id}>
                            <TimelineElement
                                key={_id}
                                id={_id}
                                category={category}
                                date={date}
                                icon={icon}
                                title={title}
                                site={site}
                                location={location}
                                description={description}
                                buttonText={buttonText}
                            />
                        </Suspense>
                    );
                })}
            </VerticalTimeline>
        </article>
    );
}
