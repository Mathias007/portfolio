import express from "express";

import { ROOT_API_MESSAGE } from "./config/messages";
import { getAboutContent } from "./controllers/about";
import { getContactContent } from "./controllers/contact";
import { getProjectsContent } from "./controllers/projects";
import { getQuotesContent } from "./controllers/quotes";
import { getTechnologiesContent } from "./controllers/technologies";
import { getTimelineContent } from "./controllers/timeline";

const router = express.Router();

router.get("/", ROOT_API_MESSAGE);
router.get("/about", getAboutContent);
router.get("/contact", getContactContent);
router.get("/projects", getProjectsContent);
router.get("/quotes", getQuotesContent);
router.get("/technologies", getTechnologiesContent);
router.get("/timeline", getTimelineContent);

export default router;
