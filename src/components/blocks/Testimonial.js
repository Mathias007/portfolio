import React from "react";

import BlockHeading from "./heading/BlockHeading";
import TestimonialBox from "./boxes/TestimonialBox";

export default function Testimonial() {
    return (
        <article className="portfolio__block testimonial" id="testimonial">
            <BlockHeading
                headingBlockClass="testimonial__heading"
                headingTitle="Rekomendacje"
                headingDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione beatae suscipit, accusantium perferendis porro,
                incidunt at nisi tenetur ducimus optio, architecto alias
                sint ullam labore consequuntur! Iure inventore illo ullam."
            />
            <div className="testimonial__content block-content">
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
