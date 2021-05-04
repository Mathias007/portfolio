import React from "react";

import Image from "../universal/Image";

export default function ServiceBox(props) {
    const { imagePath, imageDescription } = props;

    return (
        <section className="service-box">
            <Image
                imageClass="service-box__image"
                imagePath={imagePath}
                imageDescription={imageDescription}
            />
            <h3 className="service-box__header">{imageDescription}</h3>
            {/* <p className="service-box__text">{imageDescription}</p> */}
        </section>
    );
}
