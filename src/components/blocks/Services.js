import React from "react";

import BlockHeading from "./heading/BlockHeading";
import ServiceBox from "./boxes/ServiceBox";

export default function Services() {
    return (
        <article className="portfolio__block services" id="services">
            <BlockHeading
                headingBlockClass="services__heading"
                isHeadingWhite
                headingTitle="Oferowane usługi"
                headingDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione beatae suscipit, accusantium perferendis porro,
                incidunt at nisi tenetur ducimus optio, architecto alias
                sint ullam labore consequuntur! Iure inventore illo ullam."
            />

            <div className="services__content block-content">
                <ServiceBox
                    imagePath="service-icons/icon1.png"
                    imageDescription="icon1"
                    serviceTitle="Web Design"
                    serviceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto."
                />

                <ServiceBox
                    imagePath="service-icons/icon2.png"
                    imageDescription="icon2"
                    serviceTitle="Web Development"
                    serviceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto."
                />

                <ServiceBox
                    imagePath="service-icons/icon3.png"
                    imageDescription="icon3"
                    serviceTitle="Android App"
                    serviceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto."
                />

                <ServiceBox
                    imagePath="service-icons/icon4.png"
                    imageDescription="icon4"
                    serviceTitle="Photography"
                    serviceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto."
                />

                <ServiceBox
                    imagePath="service-icons/icon5.png"
                    imageDescription="icon5"
                    serviceTitle="Content Writing"
                    serviceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto."
                />

                <ServiceBox
                    imagePath="service-icons/icon6.png"
                    imageDescription="icon6"
                    serviceTitle="Video Editing"
                    serviceDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto."
                />
            </div>
        </article>
    );
}
