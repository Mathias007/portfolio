import express from "express";

import { ROOT_API_MESSAGE } from "./config/messages";
import { getAboutContent } from "./controllers/about.controller";
import { getContactContent } from "./controllers/contact.controller";
import { getProjectsContent } from "./controllers/projects.controller";
import { getQuotesContent } from "./controllers/quotes.controller";
import { getTechnologiesContent } from "./controllers/technologies.controller";
import { getTimelineContent } from "./controllers/timeline.controller";

import { paths } from "./config/names";
const {
    root,
    about,
    contact,
    projects,
    quotes,
    technologies,
    timeline,
} = paths;

const router = express.Router();

router.get(root, ROOT_API_MESSAGE);
router.get(about, getAboutContent);
router.get(contact, getContactContent);
router.get(projects, getProjectsContent);
router.get(quotes, getQuotesContent);
router.get(technologies, getTechnologiesContent);
router.get(timeline, getTimelineContent);

export default router;
