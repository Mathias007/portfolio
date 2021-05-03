import React from "react";
import Home from "../blocks/Home";
import About from "../blocks/About";
import Services from "../blocks/Services";
import Work from "../blocks/Work";
import Testimonial from "../blocks/Testimonial";
import Contact from "../blocks/Contact";
import Timeline from "../blocks/Timeline";

export default function Main() {
    return (
        <main className="portfolio">
            <Home />

            <About />

            <Timeline />

            <Work />

            <Services />

            <Testimonial />

            <Contact />
        </main>
    );
}
