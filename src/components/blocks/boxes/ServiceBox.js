import React from "react";

export default function ServiceBox(props) {
    const {
        imagePath,
        imageDescription,
        serviceTitle,
        serviceDescription,
    } = props;

    return (
        <section className="service-box">
            <img
                className="service-box__image"
                src={require(`../../../${imagePath}`).default}
                alt={imageDescription}
            />
            <h2 className="service-box__header">{serviceTitle}</h2>
            <p className="service-box__text">{serviceDescription}</p>
        </section>
    );
}
