import React, { useState } from "react";
import { send } from "emailjs-com";

import FormField from "./FormField";

export default function ContactForm() {
    const [toSend, setToSend] = useState({
        name: "",
        email: "",
        message: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_EMAIL_USER_ID
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <form className="contact__form form" onSubmit={onSubmit}>
            <h3 className="form__header">Napisz do mnie</h3>
            <FormField
                className="form__input"
                type="text"
                name="name"
                placeholder="Imię i Nazwisko"
                required
                value={toSend.name}
                onChange={handleChange}
            />
            <FormField
                className="form__input"
                type="email"
                name="email"
                placeholder="Adres e-mail"
                required
                value={toSend.email}
                onChange={handleChange}
            />
            <FormField
                type="textarea"
                className="form__textarea"
                placeholder="Wpisz wiadomość"
                required
                value={toSend.message}
                onChange={handleChange}
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
