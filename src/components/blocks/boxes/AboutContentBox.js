import React, { useState, Suspense } from "react";
import ReactHtmlParser from "react-html-parser";

import Loading from "../universal/Loading";

const Image = React.lazy(() => import("../universal/Image"));

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
        index,
    } = props;

    const contentBoxClassName = `about__content-box ${
        isHidden ? "about__content-box--hidden" : ""
    }`;

    const generateContentSubheader = (contentSubheader) => {
        return (
            <h3 className="about__subheader" onClick={toggleContentVisibility}>
                {contentSubheader ? contentSubheader : null}
            </h3>
        );
    };

    const generateContentText = (contentText) => {
        return (
            <div className="about__text">
                {contentText ? ReactHtmlParser(contentText) : null}
            </div>
        );
    };

    const generateContentImage = (imagePath, imageDescription) => {
        return (
            <div className="about__image">
                {imagePath ? (
                    <Suspense fallback={<Loading />}>
                        <Image
                            imagePath={imagePath}
                            imageDescription={
                                imageDescription ? imageDescription : "img"
                            }
                        />
                    </Suspense>
                ) : null}
            </div>
        );
    };

    return (
        <section className="about__section" key={id}>
            {generateContentSubheader(contentSubheader)}
            {index % 2 === 0 ? (
                <div className={contentBoxClassName}>
                    {generateContentText(contentText)}
                    {generateContentImage(imagePath, imageDescription)}
                </div>
            ) : (
                <div className={contentBoxClassName}>
                    {generateContentImage(imagePath, imageDescription)}
                    {generateContentText(contentText)}
                </div>
            )}
        </section>
    );
}
