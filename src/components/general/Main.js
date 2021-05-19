import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Loading from "../blocks/universal/Loading";

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

const Home = React.lazy(() => import("../blocks/Home"));
const About = React.lazy(() => import("../blocks/About"));
const Timeline = React.lazy(() => import("../blocks/Timeline"));
const Services = React.lazy(() => import("../blocks/Services"));
const Work = React.lazy(() => import("../blocks/Work"));
const Testimonial = React.lazy(() => import("../blocks/Testimonial"));
const Contact = React.lazy(() => import("../blocks/Contact"));

export default function Main() {
    return (
        <main className="portfolio">
            <Suspense fallback={<Loading />}>
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
            </Suspense>
        </main>
    );
}
