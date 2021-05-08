import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

import Image from "../universal/Image";

export default function AboutContentBox(props) {
    const [isVisible, setVisibility] = useState(false);

    const toggleContentVisibility = () => {
        setVisibility(!isVisible);
    };

    const {
        contentSubheader,
        contentText,
        imagePath,
        imageDescription,
        id,
    } = props;

    if (id % 2 !== 0)
        return (
            <section className="about__section" key={id}>
                <h3
                    className="about__subheader"
                    onClick={toggleContentVisibility}
                >
                    {contentSubheader ? contentSubheader : null}
                </h3>
                <div
                    className={`about__content-box ${
                        isVisible ? "about__content-box--visible" : ""
                    }`}
                >
                    <div className="about__text">
                        {contentText ? ReactHtmlParser(contentText) : null}
                    </div>
                    <div className="about__image">
                        {imagePath ? (
                            <Image
                                imagePath={imagePath}
                                imageDescription={
                                    imageDescription ? imageDescription : "img"
                                }
                            />
                        ) : null}
                    </div>
                </div>
            </section>
        );
    else
        return (
            <section className="about__section" key={id}>
                <h3
                    className="about__subheader"
                    onClick={toggleContentVisibility}
                >
                    {contentSubheader ? contentSubheader : null}
                </h3>
                <div
                    className={`about__content-box ${
                        isVisible ? "about__content-box--visible" : ""
                    }`}
                >
                    <div className="about__image">
                        {imagePath ? (
                            <Image
                                imagePath={imagePath}
                                imageDescription={
                                    imageDescription ? imageDescription : "img"
                                }
                            />
                        ) : null}
                    </div>
                    <div className="about__text">
                        {contentText ? ReactHtmlParser(contentText) : null}
                    </div>
                </div>
            </section>
        );
}
