import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/general/Header";
import Main from "./components/general/Main";
import Footer from "./components/general/Footer";

function Portfolio() {
    return (
        <Router>
            <div className="portfolio">
                <Header />
                <Main />
                <Footer />
            </div>
        </Router>
    );
}

export default Portfolio;
