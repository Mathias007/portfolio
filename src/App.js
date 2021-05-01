import "./App.css";

function App() {
    return (
        <div className="App">
            <header class="site-header">
                <a href="#" class="site-header__logo">
                    Portfolio
                </a>
                <div class="site-header__toggle toggle"></div>
                <nav class="site-header__menu navigation">
                    <ul class="navigation__list">
                        <li class="navigation__element">
                            <a href="#home" class="navigation__link">
                                Start
                            </a>
                        </li>
                        <li class="navigation__element">
                            <a href="#about" class="navigation__link">
                                O mnie
                            </a>
                        </li>
                        <li class="navigation__element">
                            <a href="#services" class="navigation__link">
                                Usługi
                            </a>
                        </li>
                        <li class="navigation__element">
                            <a href="#work" class="navigation__link">
                                Projekty
                            </a>
                        </li>
                        <li class="navigation__element">
                            <a href="#testimonial" class="navigation__link">
                                Rekomendacje
                            </a>
                        </li>
                        <li class="navigation__element">
                            <a href="#contact" class="navigation__link">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main class="portfolio">
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
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Odit voluptatum illum sed
                                beatae. Magni commodi dicta quia quis alias
                                reiciendis ea unde beatae sapiente enim labore,
                                qui sint in consectetur? Perspiciatis, odio
                                expedita vitae perferendis sapiente magni dolore
                                blanditiis inventore officiis eum veniam
                                eveniet. Quod inventore eveniet voluptates
                                voluptas. Dolore velit nisi, minima explicabo
                                ipsum a laborum praesentium at vero! <br />
                                <br />
                                Earum error aut recusandae? Nobis laboriosam
                                optio deleniti architecto veniam, quam ipsam sed
                                ex est odit, odio maiores quas dolorum explicabo
                                vero officia voluptate reiciendis enim a
                                eveniet, corporis reprehenderit.
                            </p>
                        </div>
                        <div class="about__image">
                            <img
                                class="image"
                                src={
                                    require("./assets/images/img1.jpg").default
                                }
                                alt="img"
                            />
                        </div>
                    </div>
                </article>

                <article class="portfolio__block services" id="services">
                    <header class="services__heading block-heading block-heading--white">
                        <h2 class="block-heading__header">Oferowane usługi</h2>
                        <p class="block-heading__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione beatae suscipit, accusantium
                            perferendis porro, incidunt at nisi tenetur ducimus
                            optio, architecto alias sint ullam labore
                            consequuntur! Iure inventore illo ullam.
                        </p>
                    </header>
                    <div class="services__content block-content">
                        <section class="service-box">
                            <img
                                class="service-box__image"
                                src={
                                    require("./assets/service-icons/icon1.png")
                                        .default
                                }
                                alt="icon1"
                            />
                            <h2 class="service-box__header">Web Design</h2>
                            <p class="service-box__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia tempora, quisquam
                                modi porro nemo ullam quos dolores eos quidem,
                                iure doloribus repudiandae nam possimus in dicta
                                sunt delectus laborum iusto.
                            </p>
                        </section>
                        <section class="service-box">
                            <img
                                class="service-box__image"
                                src={
                                    require("./assets/service-icons/icon2.png")
                                        .default
                                }
                                alt="icon2"
                            />
                            <h2 class="service-box__header">Web Development</h2>
                            <p class="service-box__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia tempora, quisquam
                                modi porro nemo ullam quos dolores eos quidem,
                                iure doloribus repudiandae nam possimus in dicta
                                sunt delectus laborum iusto.
                            </p>
                        </section>
                        <section class="service-box">
                            <img
                                class="service-box__image"
                                src={
                                    require("./assets/service-icons/icon3.png")
                                        .default
                                }
                                alt="icon3"
                            />
                            <h2 class="service-box__header">Android App</h2>
                            <p class="service-box__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia tempora, quisquam
                                modi porro nemo ullam quos dolores eos quidem,
                                iure doloribus repudiandae nam possimus in dicta
                                sunt delectus laborum iusto.
                            </p>
                        </section>
                        <section class="service-box">
                            <img
                                class="service-box__image"
                                src={
                                    require("./assets/service-icons/icon4.png")
                                        .default
                                }
                                alt="icon4"
                            />
                            <h2 class="service-box__header">Photography</h2>
                            <p class="service-box__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia tempora, quisquam
                                modi porro nemo ullam quos dolores eos quidem,
                                iure doloribus repudiandae nam possimus in dicta
                                sunt delectus laborum iusto.
                            </p>
                        </section>
                        <section class="service-box">
                            <img
                                class="service-box__image"
                                src={
                                    require("./assets/service-icons/icon5.png")
                                        .default
                                }
                                alt="icon5"
                            />
                            <h2 class="service-box__header">Content Writing</h2>
                            <p class="service-box__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia tempora, quisquam
                                modi porro nemo ullam quos dolores eos quidem,
                                iure doloribus repudiandae nam possimus in dicta
                                sunt delectus laborum iusto.
                            </p>
                        </section>
                        <section class="service-box">
                            <img
                                class="service-box__image"
                                src={
                                    require("./assets/service-icons/icon6.png")
                                        .default
                                }
                                alt="icon6"
                            />
                            <h2 class="service-box__header">Video Editing</h2>
                            <p class="service-box__text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Mollitia tempora, quisquam
                                modi porro nemo ullam quos dolores eos quidem,
                                iure doloribus repudiandae nam possimus in dicta
                                sunt delectus laborum iusto.
                            </p>
                        </section>
                    </div>
                </article>

                <article class="portfolio__block work" id="work">
                    <header class="work__heading block-heading">
                        <h2 class="block-heading__header">
                            Przegląd projektów
                        </h2>
                        <p class="block-heading__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione beatae suscipit, accusantium
                            perferendis porro, incidunt at nisi tenetur ducimus
                            optio, architecto alias sint ullam labore
                            consequuntur! Iure inventore illo ullam.
                        </p>
                    </header>
                    <div class="work__content block-content">
                        <section class="work-box">
                            <img
                                class="work-box__image"
                                src={
                                    require("./assets/work/review.svg").default
                                }
                                alt="review"
                            />
                        </section>
                        <section class="work-box">
                            <img
                                class="work-box__image"
                                src={
                                    require("./assets/work/finance.svg").default
                                }
                                alt="finance"
                            />
                        </section>
                        <section class="work-box">
                            <img
                                class="work-box__image"
                                src={
                                    require("./assets/work/education.svg")
                                        .default
                                }
                                alt="education"
                            />
                        </section>
                        <section class="work-box">
                            <img
                                class="work-box__image"
                                src={
                                    require("./assets/work/website.svg").default
                                }
                                alt="website"
                            />
                        </section>
                    </div>
                    <div class="work__addition block-heading">
                        <a href="#" class="button">
                            Zobacz więcej
                        </a>
                    </div>
                </article>

                <article class="portfolio__block testimonial" id="testimonial">
                    <header class="testimonial__heading block-heading">
                        <h2 class="block-heading__header">Rekomendacje</h2>
                        <p class="block-heading__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione beatae suscipit, accusantium
                            perferendis porro, incidunt at nisi tenetur ducimus
                            optio, architecto alias sint ullam labore
                            consequuntur! Iure inventore illo ullam.
                        </p>
                    </header>
                    <div class="testimonial__content block-content">
                        <section class="testimonial-box">
                            <p class="testimonial-box__text">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Unde voluptatibus enim in odio
                                labore voluptas iusto necessitatibus modi omnis
                                aliquid iure, incidunt eligendi repudiandae
                                mollitia eveniet tenetur animi maxime. Sunt.
                                Reprehenderit corporis ratione iusto mollitia
                                non, cum quasi. Laboriosam eos aliquam nulla
                                unde, blanditiis, ex perspiciatis molestias
                                maxime totam, natus repellat? Quibusdam ipsam
                                corporis corrupti dolore, excepturi repellat
                                beatae qui.
                            </p>
                            <h3 class="testimonial-box__meta meta">
                                Autor Nieznany <br />
                                <span class="meta__addition-info">
                                    Creative Designer
                                </span>
                            </h3>
                        </section>
                        <section class="testimonial-box">
                            <p class="testimonial-box__text">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Unde voluptatibus enim in odio
                                labore voluptas iusto necessitatibus modi omnis
                                aliquid iure, incidunt eligendi repudiandae
                                mollitia eveniet tenetur animi maxime. Sunt.
                                Reprehenderit corporis ratione iusto mollitia
                                non, cum quasi. Laboriosam eos aliquam nulla
                                unde, blanditiis, ex perspiciatis molestias
                                maxime totam, natus repellat? Quibusdam ipsam
                                corporis corrupti dolore, excepturi repellat
                                beatae qui.
                            </p>
                            <h3 class="testimonial-box__meta meta">
                                Autor Nieznany <br />
                                <span class="meta__addition-info">
                                    Creative Designer
                                </span>
                            </h3>
                        </section>
                    </div>
                </article>

                <article class="portfolio__block contact" id="contact">
                    <header class="contact__heading block-heading block-heading--white">
                        <h2 class="block-heading__header">
                            Skontaktuj się ze mną
                        </h2>
                        <p class="block-heading__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione beatae suscipit, accusantium
                            perferendis porro, incidunt at nisi tenetur ducimus
                            optio, architecto alias sint ullam labore
                            consequuntur! Iure inventore illo ullam.
                        </p>
                    </header>
                    <div class="contact__content block-content">
                        <div class="contact__info">
                            <h3 class="contact__info-header">
                                Dane kontaktowe
                            </h3>
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
                                        <p class="info-box__data">
                                            211-322-455
                                        </p>
                                    </div>
                                </section>
                                <section class="info-box">
                                    <div class="info-box__icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="info-box__text">
                                        <h3 class="info-box__name">Email</h3>
                                        <p class="info-box__data">
                                            test@eggg.com
                                        </p>
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
            </main>
            <footer class="copyright">
                <p>
                    Copyright © 2021 Mateusz Mathias Stawowski. Wszystkie prawa
                    zastrzeżone.
                </p>
            </footer>
        </div>
    );
}

export default App;
