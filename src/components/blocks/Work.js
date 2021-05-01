import React from "react";

import WorkBox from "./boxes/WorkBox";

export default function Work() {
    return (
        <article className="portfolio__block work" id="work">
            <header className="work__heading block-heading">
                <h2 className="block-heading__header">Przegląd projektów</h2>
                <p className="block-heading__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione beatae suscipit, accusantium perferendis porro,
                    incidunt at nisi tenetur ducimus optio, architecto alias
                    sint ullam labore consequuntur! Iure inventore illo ullam.
                </p>
            </header>
            <div className="work__content block-content">
                <WorkBox
                    imagePath="assets/work/review.svg"
                    imageDescription="review"
                />
                <WorkBox
                    imagePath="assets/work/finance.svg"
                    imageDescription="finance"
                />
                <WorkBox
                    imagePath="assets/work/education.svg"
                    imageDescription="education"
                />
                <WorkBox
                    imagePath="assets/work/website.svg"
                    imageDescription="website"
                />
            </div>
            <div className="work__addition block-heading">
                <a href="#" class="button">
                    Zobacz więcej
                </a>
            </div>
        </article>
    );
}
