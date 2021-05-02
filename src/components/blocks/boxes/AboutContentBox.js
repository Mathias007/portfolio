import React from "react";
import ReactHtmlParser from "react-html-parser";

import Image from "../universal/Image";

export default function AboutContentBox(props) {
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
                <h3 className="about__subheader">
                    {contentSubheader ? contentSubheader : null}
                </h3>
                <div className="about__content-box">
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
                <h3 className="about__subheader">
                    {contentSubheader ? contentSubheader : null}
                </h3>
                <div className="about__content-box">
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
