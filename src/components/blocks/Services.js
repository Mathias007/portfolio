import React from "react";

import BlockHeading from "./heading/BlockHeading";
import ServiceBox from "./boxes/ServiceBox";

import { techData } from "../../data/techData";

export default function Services() {
    return (
        <article className="portfolio__block services" id="services">
            <BlockHeading
                headingBlockClass="services__heading"
                isHeadingWhite
                headingTitle="Używane języki, technologie i narzędzia"
                headingDescription="Największą przyjemność programowania webowego stanowi dla mnie możliwość wykorzystywania różnych rozwiązań technologicznych. Oprócz języków typowo frontendowych z przyjemnością zagłębiam się również w backend. Nie zaniedbuję także frameworków oraz CMS."
            />

            <div className="services__content block-content">
                {techData.map((element) => {
                    const { id, techImageName, techImageDescription } = element;

                    return (
                        <ServiceBox
                            id={id}
                            key={id}
                            imagePath={`technologies/png/${techImageName}.png`}
                            imageDescription={techImageDescription}
                        />
                    );
                })}
            </div>
        </article>
    );
}
