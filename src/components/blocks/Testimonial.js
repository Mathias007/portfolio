import React from "react";

import TestimonialBox from "./boxes/TestimonialBox";

export default function Testimonial() {
    return (
        <article class="portfolio__block testimonial" id="testimonial">
            <header class="testimonial__heading block-heading">
                <h2 class="block-heading__header">Rekomendacje</h2>
                <p class="block-heading__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione beatae suscipit, accusantium perferendis porro,
                    incidunt at nisi tenetur ducimus optio, architecto alias
                    sint ullam labore consequuntur! Iure inventore illo ullam.
                </p>
            </header>
            <div class="testimonial__content block-content">
                <TestimonialBox
                    testimonialContent="Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Unde voluptatibus enim in odio labore voluptas
                        iusto necessitatibus modi omnis aliquid iure, incidunt
                        eligendi repudiandae mollitia eveniet tenetur animi
                        maxime. Sunt. Reprehenderit corporis ratione iusto
                        mollitia non, cum quasi. Laboriosam eos aliquam nulla
                        unde, blanditiis, ex perspiciatis molestias maxime
                        totam, natus repellat? Quibusdam ipsam corporis corrupti
                        dolore, excepturi repellat beatae qui."
                    authorName="Autor Nieznany"
                    authorTitle="Creative Designer"
                />

                <TestimonialBox
                    testimonialContent="Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Unde voluptatibus enim in odio labore voluptas
                        iusto necessitatibus modi omnis aliquid iure, incidunt
                        eligendi repudiandae mollitia eveniet tenetur animi
                        maxime. Sunt. Reprehenderit corporis ratione iusto
                        mollitia non, cum quasi. Laboriosam eos aliquam nulla
                        unde, blanditiis, ex perspiciatis molestias maxime
                        totam, natus repellat? Quibusdam ipsam corporis corrupti
                        dolore, excepturi repellat beatae qui."
                    authorName="Autor Nieznany"
                    authorTitle="Creative Designer"
                />
            </div>
        </article>
    );
}
