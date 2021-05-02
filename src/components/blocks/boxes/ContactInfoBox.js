import React from "react";

import Icon from "../universal/Icon";

export default function ContactInfoBox(props) {
    const { icon, infoName, infoData } = props;

    return (
        <section className="info-box">
            <div className="info-box__icon">
                <Icon icon={icon} />
            </div>
            <div className="info-box__text">
                <h3 className="info-box__name">{infoName}</h3>
                <p className="info-box__data">{infoData}</p>
            </div>
        </section>
    );
}
