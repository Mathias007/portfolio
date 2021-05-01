import React from "react";

export default function WorkBox(props) {
    const { imagePath, imageDescription } = props;

    return (
        <section className="work-box">
            <img
                className="work-box__image"
                src={require(`../../../${imagePath}`).default}
                alt={imageDescription}
            />
        </section>
    );
}
