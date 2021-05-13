import React, { useState } from "react";
import { send } from "emailjs-com";

import FormField from "./FormField";

export default function ContactForm() {
    const [toSend, setToSend] = useState({
        name: "",
        email: "",
        topic: "",
        message: "",
    });
    const [error, setErrorMsg] = useState({
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
                setToSend({
                    name: "",
                    email: "",
                    topic: "",
                    message: "",
                });
                setErrorMsg({
                    message: "Wiadomość została wysłana!",
                });
            })
            .catch((err) => {
                console.log("FAILED...", err);
                setErrorMsg({
                    message: "Wystąpił błąd i wiadomość nie została wysłana.",
                });
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
                type="text"
                name="topic"
                placeholder="Temat"
                required
                value={toSend.topic}
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
            {error.message ? (
                <p className="form__error-info">{error.message}</p>
            ) : null}
        </form>
    );
}
