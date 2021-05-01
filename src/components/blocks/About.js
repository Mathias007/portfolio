import React from "react";

export default function About() {
    return (
        <article class="portfolio__block about" id="about">
            <header class="about__heading block-heading">
                <h2 class="block-heading__header">O mnie</h2>
            </header>
            <div class="about__content block-content">
                <div class="about__content-box">
                    <h3 class="about__subheader">
                        Jestem Frontend Web Developerem.
                    </h3>
                    <p class="about__text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Odit voluptatum illum sed beatae. Magni commodi
                        dicta quia quis alias reiciendis ea unde beatae sapiente
                        enim labore, qui sint in consectetur? Perspiciatis, odio
                        expedita vitae perferendis sapiente magni dolore
                        blanditiis inventore officiis eum veniam eveniet. Quod
                        inventore eveniet voluptates voluptas. Dolore velit
                        nisi, minima explicabo ipsum a laborum praesentium at
                        vero! <br />
                        <br />
                        Earum error aut recusandae? Nobis laboriosam optio
                        deleniti architecto veniam, quam ipsam sed ex est odit,
                        odio maiores quas dolorum explicabo vero officia
                        voluptate reiciendis enim a eveniet, corporis
                        reprehenderit.
                    </p>
                </div>
                <div class="about__image">
                    <img
                        class="image"
                        src={require("../../assets/images/img1.jpg").default}
                        alt="img"
                    />
                </div>
            </div>
        </article>
    );
}
