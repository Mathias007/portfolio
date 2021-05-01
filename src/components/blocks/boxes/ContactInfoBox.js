import React from "react";

export default function ContactInfoBox(props) {
    const { iconClass, infoName, infoData } = props;

    return (
        <section className="info-box">
            <div className="info-box__icon">
                <i className={iconClass}></i>
            </div>
            <div className="info-box__text">
                <h3 className="info-box__name">{infoName}</h3>
                <p className="info-box__data">{infoData}</p>
            </div>
        </section>
    );
}
