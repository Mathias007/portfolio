import React, { useState, useEffect } from "react";
import axios from "axios";

import BlockHeading from "./heading/BlockHeading";
import ServiceBox from "./boxes/ServiceBox";

import { paths } from "../../config/names";
const { technologies } = paths;

export default function Services() {
    const [dataLoading, setDataLoading] = useState(false);
    const [technologiesData, setTechnologiesData] = useState([]);

    useEffect(() => {
        setDataLoading(true);

        async function fetchTechnologiesData() {
            const result = await axios(
                `${process.env.REACT_APP_SERVER_URL}${technologies}`
            );

            setTechnologiesData(result.data.technologiesData);
        }

        if (dataLoading) {
            fetchTechnologiesData();
        }
        return () => {
            setDataLoading(false);
        };
    }, [technologiesData, dataLoading]);

    return (
        <article className="portfolio__block services" id="services">
            <BlockHeading
                headingBlockClass="services__heading"
                isHeadingWhite
                headingTitle="Używane języki, technologie i narzędzia"
                headingDescription="Największą przyjemność programowania webowego stanowi dla mnie możliwość wykorzystywania różnych rozwiązań technologicznych. Oprócz języków typowo frontendowych z przyjemnością zagłębiam się również w backend. Nie zaniedbuję także frameworków oraz CMS."
            />

            <div className="services__content block-content">
                {technologiesData.map((element) => {
                    const {
                        _id,
                        techImageName,
                        techImageDescription,
                    } = element;

                    return (
                        <ServiceBox
                            id={_id}
                            key={_id}
                            imagePath={`technologies/png/${techImageName}.png`}
                            imageDescription={techImageDescription}
                        />
                    );
                })}
            </div>
        </article>
    );
}
