import React from "react";

export default function Home() {
    return (
        <article className="portfolio__block home" id="home">
            <div className="home__textbox textBx">
                <h2 className="home__header">
                    Witaj! Nazywam się <br />
                    <span className="home__author">Mateusz Stawowski</span>.
                </h2>
                <h3 className="home__subheader">
                    Jestem Frontend Web Developerem.
                </h3>
                <a href="#about" className="home__button button">
                    O mnie
                </a>
            </div>
        </article>
    );
}
