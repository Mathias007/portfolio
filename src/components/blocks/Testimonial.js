import React, { useState, useEffect } from "react";
import axios from "axios";

import BlockHeading from "./heading/BlockHeading";
import TestimonialBox from "./boxes/TestimonialBox";

import config from "../../config/config";
import { paths } from "../../config/names";

const { SERVER_URL } = config;
const { quotes } = paths;

export default function Testimonial() {
    const [dataLoading, setDataLoading] = useState(false);
    const [quotesData, setQuotesData] = useState([]);

    useEffect(() => {
        setDataLoading(true);

        async function fetchQuotesData() {
            const result = await axios(`${SERVER_URL}${quotes}`);

            setQuotesData(result.data.quotesData);
        }

        if (dataLoading) {
            fetchQuotesData();
        }
        return () => {
            setDataLoading(false);
        };
    }, [dataLoading]);

    return (
        <article className="portfolio__block testimonial" id="testimonial">
            <BlockHeading
                headingBlockClass="testimonial__heading"
                headingTitle="Inspirujące cytaty"
            />
            <div className="testimonial__content block-content">
                {quotesData.map((element) => {
                    const { _id, quoteText, authorName, authorTitle } = element;

                    return (
                        <TestimonialBox
                            key={_id}
                            testimonialContent={quoteText}
                            authorName={authorName}
                            authorTitle={authorTitle}
                        />
                    );
                })}
            </div>
        </article>
    );
}
