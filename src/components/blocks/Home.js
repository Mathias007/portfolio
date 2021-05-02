import React from "react";

import Button from "./universal/Button";

export default function Home() {
    return (
        <article className="portfolio__block home" id="home">
            <div className="home__text-box">
                <h2 className="home__header">
                    Witaj! Nazywam się <br />
                    <span className="home__author">Mateusz Stawowski</span>.
                </h2>
                <h3 className="home__subheader">
                    Jestem Frontend Web Developerem.
                </h3>

                <Button
                    className="home__button button"
                    href="#about"
                    text="O mnie"
                />
            </div>
        </article>
    );
}
