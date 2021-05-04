import React from "react";

import BlockHeading from "./heading/BlockHeading";
import ContactInfoBox from "./boxes/ContactInfoBox";
import ContactForm from "./form/ContactForm";

import { contactData } from "../../data/contactData";

export default function Contact() {
    return (
        <article className="portfolio__block contact" id="contact">
            <BlockHeading
                headingBlockClass="contact__heading"
                isHeadingWhite
                headingTitle="Skontaktuj się ze mną"
                headingDescription="Jestem otwarty na zlecenia komercyjne, oferty pracy, jak również propozycje współpracy przy projektach hobbystycznych. Dla celów kontaktowych proszę o skorzystanie z danych zamieszczonych poniżej lub formularza."
            />

            <div className="contact__content block-content">
                <div className="contact__info">
                    <h3 className="contact__info-header">Dane kontaktowe</h3>
                    <div className="contact__info-box">
                        {contactData.map((element) => {
                            const {
                                id,
                                contactType,
                                contactLabel,
                                contactLink,
                                icon,
                            } = element;

                            return (
                                <ContactInfoBox
                                    id={id}
                                    key={id}
                                    infoName={contactType}
                                    infoData={contactLabel}
                                    infoLink={contactLink}
                                    icon={icon}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="contact__form-box form-box">
                    <ContactForm />
                </div>
            </div>
        </article>
    );
}
