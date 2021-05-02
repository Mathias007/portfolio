import React from "react";

import Button from "./universal/Button";
import BlockHeading from "./heading/BlockHeading";
import WorkBox from "./boxes/WorkBox";

export default function Work() {
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
                <WorkBox
                    imagePath="work/review.svg"
                    imageDescription="review"
                />
                <WorkBox
                    imagePath="work/finance.svg"
                    imageDescription="finance"
                />
                <WorkBox
                    imagePath="work/education.svg"
                    imageDescription="education"
                />
                <WorkBox
                    imagePath="work/website.svg"
                    imageDescription="website"
                />
            </div>
            <div className="work__addition block-heading">
                <Button
                    className="work__button button"
                    href="#work"
                    text="Zobacz więcej"
                />
            </div>
        </article>
    );
}
