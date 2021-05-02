import React from "react";

export default function Image(props) {
    const { imageClass, imagePath, imageDescription } = props;

    if (imagePath)
        return (
            <img
                className={imageClass ? imageClass : "image"}
                src={require(`../../../assets/${imagePath}`).default}
                alt={imageDescription ? imageDescription : "img"}
            />
        );
}
