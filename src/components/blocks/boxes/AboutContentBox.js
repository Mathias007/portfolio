import React from "react";

import Image from "../universal/Image";

export default function AboutContentBox(props) {
    const {
        contentSubheader,
        contentText,
        imagePath,
        imageDescription,
    } = props;

    return (
        <>
            <div className="about__content-box">
                <h3 className="about__subheader">
                    {contentSubheader ? contentSubheader : null}
                </h3>
                <p className="about__text">
                    {contentText ? contentText : null}
                </p>
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
        </>
    );
}
