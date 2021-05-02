import React from "react";

import Image from "../universal/Image";

export default function WorkBox(props) {
    const { imagePath, imageDescription } = props;

    return (
        <section className="work-box">
            <Image
                imageClass="work-box__image"
                imagePath={imagePath}
                imageDescription={imageDescription}
            />
        </section>
    );
}
