import React from "react";

import Icon from "../universal/Icon";

export default function ContactInfoBox(props) {
    const { icon, infoName, infoData, infoLink } = props;

    return (
        <section className="info-box">
            <div className="info-box__icon">
                <Icon icon={icon} />
            </div>
            <div className="info-box__text">
                <h3 className="info-box__name">{infoName}</h3>
                <p className="info-box__data">
                    {infoLink ? <a href={infoLink}>{infoData}</a> : infoData}
                </p>
            </div>
        </section>
    );
}
