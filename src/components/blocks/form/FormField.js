import React from "react";

export default function FormField(props) {
    const { type, name, placeholder, required, value } = props;

    switch (type) {
        case "textarea":
            return (
                <textarea
                    className="form__textarea"
                    placeholder={placeholder}
                    required={required}
                />
            );
        case "submit":
            return (
                <input
                    className="form__input form__input--submit"
                    type={type}
                    name={name}
                    value={value}
                    required={required}
                />
            );

        default:
            return (
                <input
                    className="form__input"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                />
            );
    }
}
