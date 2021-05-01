import React from "react";

export default function ContactForm() {
    return (
        <form className="contact__form form">
            <h3 className="form__header">Napisz do mnie</h3>
            <input
                className="form__input"
                type="text"
                name="name"
                placeholder="Imię i Nazwisko"
            />
            <input
                className="form__input"
                type="email"
                name="email"
                placeholder="Adres e-mail"
            />
            <textarea
                className="form__textarea"
                placeholder="Wpisz wiadomość"
            ></textarea>
            <input
                className="form__input form__input--submit"
                type="submit"
                name="send"
                value="Wyślij"
            />
        </form>
    );
}
