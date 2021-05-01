import React from "react";

import BlockHeading from "./heading/BlockHeading";
import AboutContentBox from "./boxes/AboutContentBox";

export default function About() {
    return (
        <article className="portfolio__block about" id="about">
            <BlockHeading
                headingBlockClass="about__heading"
                headingTitle="O mnie"
            />

            <div className="about__content block-content">
                <AboutContentBox />
                <div className="about__image">
                    <img
                        className="image"
                        src={require("../../assets/images/img1.jpg").default}
                        alt="img"
                    />
                </div>
            </div>
        </article>
    );
}
