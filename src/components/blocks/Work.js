import React from "react";

export default function Work() {
    return (
        <article class="portfolio__block work" id="work">
            <header class="work__heading block-heading">
                <h2 class="block-heading__header">Przegląd projektów</h2>
                <p class="block-heading__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione beatae suscipit, accusantium perferendis porro,
                    incidunt at nisi tenetur ducimus optio, architecto alias
                    sint ullam labore consequuntur! Iure inventore illo ullam.
                </p>
            </header>
            <div class="work__content block-content">
                <section class="work-box">
                    <img
                        class="work-box__image"
                        src={require("../../assets/work/review.svg").default}
                        alt="review"
                    />
                </section>
                <section class="work-box">
                    <img
                        class="work-box__image"
                        src={require("../../assets/work/finance.svg").default}
                        alt="finance"
                    />
                </section>
                <section class="work-box">
                    <img
                        class="work-box__image"
                        src={require("../../assets/work/education.svg").default}
                        alt="education"
                    />
                </section>
                <section class="work-box">
                    <img
                        class="work-box__image"
                        src={require("../../assets/work/website.svg").default}
                        alt="website"
                    />
                </section>
            </div>
            <div class="work__addition block-heading">
                <a href="#" class="button">
                    Zobacz więcej
                </a>
            </div>
        </article>
    );
}
