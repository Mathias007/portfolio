import React, { Suspense } from "react";

import BlockHeading from "./heading/BlockHeading";
import Loading from "./universal/Loading";

import { aboutData } from "../../data/aboutData";

const AboutContentBox = React.lazy(() => import("./boxes/AboutContentBox"));

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
                        <Suspense fallback={<Loading />} key={id}>
                            <AboutContentBox
                                id={id}
                                contentSubheader={subheader}
                                contentText={paragraph}
                                imagePath={imagePath}
                                imageDescription={imageDescription}
                            />
                        </Suspense>
                    );
                })}
            </div>
        </article>
    );
}
