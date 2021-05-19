import React, { useState, useEffect } from "react";
import axios from "axios";

import BlockHeading from "./heading/BlockHeading";
import ContactInfoBox from "./boxes/ContactInfoBox";
import ContactForm from "./form/ContactForm";

import config from "../../config/config";
import { paths } from "../../config/names";

const { SERVER_URL } = config;
const { contact } = paths;

export default function Contact() {
    const [dataLoading, setDataLoading] = useState(false);
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        setDataLoading(true);

        async function fetchContactData() {
            const result = await axios(`${SERVER_URL}${contact}`);

            setContactData(result.data.contactData);
        }

        if (dataLoading) {
            fetchContactData();
        }
        return () => {
            setDataLoading(false);
        };
    }, [contactData, dataLoading]);

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
                                _id,
                                contactType,
                                contactLabel,
                                contactLink,
                                icon,
                            } = element;

                            return (
                                <ContactInfoBox
                                    id={_id}
                                    key={_id}
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
