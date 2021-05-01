import React from "react";

import FormField from "./FormField";

export default function ContactForm() {
    return (
        <form className="contact__form form">
            <h3 className="form__header">Napisz do mnie</h3>
            <FormField
                className="form__input"
                type="text"
                name="name"
                placeholder="Imię i Nazwisko"
                required
            />
            <FormField
                className="form__input"
                type="email"
                name="email"
                placeholder="Adres e-mail"
                required
            />
            <FormField
                type="textarea"
                className="form__textarea"
                placeholder="Wpisz wiadomość"
                required
            />
            <FormField
                className="form__input form__input--submit"
                type="submit"
                name="send"
                value="Wyślij"
            />
        </form>
    );
}
