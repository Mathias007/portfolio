import React from "react";

export default function Contact() {
    return (
        <article class="portfolio__block contact" id="contact">
            <header class="contact__heading block-heading block-heading--white">
                <h2 class="block-heading__header">Skontaktuj się ze mną</h2>
                <p class="block-heading__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione beatae suscipit, accusantium perferendis porro,
                    incidunt at nisi tenetur ducimus optio, architecto alias
                    sint ullam labore consequuntur! Iure inventore illo ullam.
                </p>
            </header>
            <div class="contact__content block-content">
                <div class="contact__info">
                    <h3 class="contact__info-header">Dane kontaktowe</h3>
                    <div class="contact__info-box">
                        <section class="info-box">
                            <div class="info-box__icon">
                                <i class="fas fa-map-marker"></i>
                            </div>
                            <div class="info-box__text">
                                <h3 class="info-box__name">Adres</h3>
                                <p class="info-box__data">
                                    ulica <br />
                                    miejscowość <br />
                                    kod pocztowy
                                </p>
                            </div>
                        </section>
                        <section class="info-box">
                            <div class="info-box__icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="info-box__text">
                                <h3 class="info-box__name">Telefon</h3>
                                <p class="info-box__data">211-322-455</p>
                            </div>
                        </section>
                        <section class="info-box">
                            <div class="info-box__icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="info-box__text">
                                <h3 class="info-box__name">Email</h3>
                                <p class="info-box__data">test@eggg.com</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="contact__form-box form-box">
                    <form class="contact__form form">
                        <h3 class="form__header">Napisz do mnie</h3>
                        <input
                            class="form__input"
                            type="text"
                            name="name"
                            placeholder="Imię i Nazwisko"
                        />
                        <input
                            class="form__input"
                            type="email"
                            name="email"
                            placeholder="Adres e-mail"
                        />
                        <textarea
                            class="form__textarea"
                            placeholder="Wpisz wiadomość"
                        ></textarea>
                        <input
                            class="form__input form__input--submit"
                            type="submit"
                            name="send"
                            value="Wyślij"
                        />
                    </form>
                </div>
            </div>
        </article>
    );
}
