import React from "react";

import BlockHeading from "./heading/BlockHeading";
import AboutContentBox from "./boxes/AboutContentBox";

import { aboutData } from "../../data/aboutData";

export default function About() {
    return (
        <article className="portfolio__block about" id="about">
            <BlockHeading
                headingBlockClass="about__heading"
                headingTitle="O mnie, czyli historia pewnego pasjonata"
            />

            <div className="about__content block-content">
                {aboutData.map((element) => {
                    const {
                        id,
                        subheader,
                        paragraph,
                        imagePath,
                        imageDescription,
                    } = element;

                    return (
                        <AboutContentBox
                            id={id}
                            key={id}
                            contentSubheader={subheader}
                            contentText={paragraph}
                            imagePath={imagePath}
                            imageDescription={imageDescription}
                        />
                    );
                })}
            </div>
        </article>
    );
}
