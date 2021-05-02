import React from "react";

import Image from "../universal/Image";

export default function ServiceBox(props) {
    const {
        imagePath,
        imageDescription,
        serviceTitle,
        serviceDescription,
    } = props;

    return (
        <section className="service-box">
            <Image
                imageClass="service-box__image"
                imagePath={imagePath}
                imageDescription={imageDescription}
            />
            <h2 className="service-box__header">{serviceTitle}</h2>
            <p className="service-box__text">{serviceDescription}</p>
        </section>
    );
}
