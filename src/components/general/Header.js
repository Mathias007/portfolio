import React from "react";

export default function Header() {
    return (
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
    );
}
