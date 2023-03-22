export const database = "portfolio";

export const collections = {
    root: database,
    about: `${database}_about`,
    contact: `${database}_contact`,
    projects: `${database}_projects`,
    quotes: `${database}_quotes`,
    technologies: `${database}_technologies`,
    timeline: `${database}_timeline`,
};

export const paths = {
    root: "/",
    about: "/about",
    contact: "/contact",
    projects: "/projects",
    quotes: "/quotes",
    technologies: "/technologies",
    timeline: "/timeline",
};
