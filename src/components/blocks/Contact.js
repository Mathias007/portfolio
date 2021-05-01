import React from "react";

import BlockHeading from "./heading/BlockHeading";
import ContactInfoBox from "./boxes/ContactInfoBox";
import ContactForm from "./form/ContactForm";

export default function Contact() {
    return (
        <article className="portfolio__block contact" id="contact">
            <BlockHeading
                headingBlockClass="contact__heading"
                isHeadingWhite
                headingTitle="Skontaktuj się ze mną"
                headingDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione beatae suscipit, accusantium perferendis porro,
                        incidunt at nisi tenetur ducimus optio, architecto alias
                        sint ullam labore consequuntur! Iure inventore illo ullam."
            />

            <div className="contact__content block-content">
                <div className="contact__info">
                    <h3 className="contact__info-header">Dane kontaktowe</h3>
                    <div className="contact__info-box">
                        <ContactInfoBox
                            iconClass="fas fa-map-marker"
                            infoName="Adres"
                            infoData={`ulica \n miejscowość \n kod pocztowy`}
                        />
                        <ContactInfoBox
                            iconClass="fas fa-phone"
                            infoName="Telefon"
                            infoData="211-322-455"
                        />
                        <ContactInfoBox
                            iconClass="fas fa-envelope"
                            infoName="Email"
                            infoData="test@eggg.com"
                        />
                    </div>
                </div>
                <div className="contact__form-box form-box">
                    <ContactForm />
                </div>
            </div>
        </article>
    );
}
