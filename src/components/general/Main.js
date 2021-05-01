import React from "react";
import Home from "../blocks/Home";
import About from "../blocks/About";
import Services from "../blocks/Services";
import Work from "../blocks/Work";
import Testimonial from "../blocks/Testimonial";
import Contact from "../blocks/Contact";

export default function Main() {
    return (
        <main class="portfolio">
            <Home />

            <About />

            <Services />

            <Work />

            <Testimonial />

            <Contact />
        </main>
    );
}
