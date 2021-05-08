import React from "react";

import BlockHeading from "./heading/BlockHeading";
import TestimonialBox from "./boxes/TestimonialBox";

import { quotesData } from "../../data/quotesData";

export default function Testimonial() {
    return (
        <article className="portfolio__block testimonial" id="testimonial">
            <BlockHeading
                headingBlockClass="testimonial__heading"
                headingTitle="Inspirujące cytaty"
            />
            <div className="testimonial__content block-content">
                {quotesData.map((element) => {
                    const { id, quoteText, authorName, authorTitle } = element;

                    return (
                        <TestimonialBox
                            key={id}
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
