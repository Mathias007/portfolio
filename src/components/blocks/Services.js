import React from "react";

export default function Services() {
    return (
        <article class="portfolio__block services" id="services">
            <header class="services__heading block-heading block-heading--white">
                <h2 class="block-heading__header">Oferowane usługi</h2>
                <p class="block-heading__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione beatae suscipit, accusantium perferendis porro,
                    incidunt at nisi tenetur ducimus optio, architecto alias
                    sint ullam labore consequuntur! Iure inventore illo ullam.
                </p>
            </header>
            <div class="services__content block-content">
                <section class="service-box">
                    <img
                        class="service-box__image"
                        src={
                            require("../../assets/service-icons/icon1.png").default
                        }
                        alt="icon1"
                    />
                    <h2 class="service-box__header">Web Design</h2>
                    <p class="service-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto.
                    </p>
                </section>
                <section class="service-box">
                    <img
                        class="service-box__image"
                        src={
                            require("../../assets/service-icons/icon2.png").default
                        }
                        alt="icon2"
                    />
                    <h2 class="service-box__header">Web Development</h2>
                    <p class="service-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto.
                    </p>
                </section>
                <section class="service-box">
                    <img
                        class="service-box__image"
                        src={
                            require("../../assets/service-icons/icon3.png").default
                        }
                        alt="icon3"
                    />
                    <h2 class="service-box__header">Android App</h2>
                    <p class="service-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto.
                    </p>
                </section>
                <section class="service-box">
                    <img
                        class="service-box__image"
                        src={
                            require("../../assets/service-icons/icon4.png").default
                        }
                        alt="icon4"
                    />
                    <h2 class="service-box__header">Photography</h2>
                    <p class="service-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto.
                    </p>
                </section>
                <section class="service-box">
                    <img
                        class="service-box__image"
                        src={
                            require("../../assets/service-icons/icon5.png").default
                        }
                        alt="icon5"
                    />
                    <h2 class="service-box__header">Content Writing</h2>
                    <p class="service-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto.
                    </p>
                </section>
                <section class="service-box">
                    <img
                        class="service-box__image"
                        src={
                            require("../../assets/service-icons/icon6.png").default
                        }
                        alt="icon6"
                    />
                    <h2 class="service-box__header">Video Editing</h2>
                    <p class="service-box__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia tempora, quisquam modi porro nemo ullam quos
                        dolores eos quidem, iure doloribus repudiandae nam
                        possimus in dicta sunt delectus laborum iusto.
                    </p>
                </section>
            </div>
        </article>
    );
}
