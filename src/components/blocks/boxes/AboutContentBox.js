import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

import Image from "../universal/Image";

export default function AboutContentBox(props) {
    const [isHidden, setVisibility] = useState(false);

    const toggleContentVisibility = () => {
        setVisibility(!isHidden);
    };

    const {
        contentSubheader,
        contentText,
        imagePath,
        imageDescription,
        id,
    } = props;

    const contentBoxClassName = `about__content-box ${
        isHidden ? "about__content-box--hidden" : ""
    }`;

    return (
        <section className="about__section" key={id}>
            <h3 className="about__subheader" onClick={toggleContentVisibility}>
                {contentSubheader ? contentSubheader : null}
            </h3>

            {id % 2 !== 0 ? (
                <div className={contentBoxClassName}>
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
            ) : (
                <div className={contentBoxClassName}>
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
            )}
        </section>
    );
}
