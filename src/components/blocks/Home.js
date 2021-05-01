import React from "react";

export default function Home() {
    return (
        <article class="portfolio__block home" id="home">
            <div class="home__textbox textBx">
                <h2 class="home__header">
                    Witaj! Nazywam się <br />
                    <span class="home__author">Mateusz Stawowski</span>.
                </h2>
                <h3 class="home__subheader">
                    Jestem Frontend Web Developerem.
                </h3>
                <a href="#about" class="home__button button">
                    O mnie
                </a>
            </div>
        </article>
    );
}
