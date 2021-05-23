import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../blocks/Home";
import About from "../blocks/About";
import Timeline from "../blocks/Timeline";
import Services from "../blocks/Services";
import Work from "../blocks/Work";
import Testimonial from "../blocks/Testimonial";
import Contact from "../blocks/Contact";

import { paths } from "../../config/names";
const {
    home,
    about,
    contact,
    projects,
    technologies,
    timeline,
    inspirations,
} = paths;

export default function Main() {
    return (
        <main className="portfolio">
            <Switch>
                <Route exact path={home}>
                    <Home />
                </Route>
                <Route path={about}>
                    <About />
                </Route>
                <Route path={timeline}>
                    <Timeline />
                </Route>
                <Route path={projects}>
                    <Work />
                </Route>
                <Route path={technologies}>
                    <Services />
                </Route>
                <Route path={inspirations}>
                    <Testimonial />
                </Route>
                <Route path={contact}>
                    <Contact />
                </Route>
            </Switch>
        </main>
    );
}
