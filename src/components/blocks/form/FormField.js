import React from "react";

export default function FormField(props) {
    const { type, name, placeholder, required, value, onChange } = props;

    switch (type) {
        case "textarea":
            return (
                <textarea
                    className="form__textarea"
                    placeholder={placeholder}
                    required={required}
                    onChange={onChange}
                >
                    {value}
                </textarea>
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
                    value={value}
                    onChange={onChange}
                />
            );
    }
}
