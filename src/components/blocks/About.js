import React from "react";

import BlockHeading from "./heading/BlockHeading";
import AboutContentBox from "./boxes/AboutContentBox";

export default function About() {
    return (
        <article className="portfolio__block about" id="about">
            <BlockHeading
                headingBlockClass="about__heading"
                headingTitle="O mnie"
            />

            <div className="about__content block-content">
                <AboutContentBox
                    contentSubheader="Jestem Frontend Web Developerem."
                    contentText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit voluptatum illum sed beatae. Magni commodi dicta quia
                    quis alias reiciendis ea unde beatae sapiente enim labore,
                    qui sint in consectetur? Perspiciatis, odio expedita vitae
                    perferendis sapiente magni dolore blanditiis inventore
                    officiis eum veniam eveniet. Quod inventore eveniet
                    voluptates voluptas. Dolore velit nisi, minima explicabo
                    ipsum a laborum praesentium at vero! <br />
                    <br />
                    Earum error aut recusandae? Nobis laboriosam optio deleniti
                    architecto veniam, quam ipsam sed ex est odit, odio maiores
                    quas dolorum explicabo vero officia voluptate reiciendis
                    enim a eveniet, corporis reprehenderit"
                    imagePath="images/img1.jpg"
                    imageDescription="img1"
                />
            </div>
        </article>
    );
}
