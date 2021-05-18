import { ProjectsSchema } from "../schema/ProjectsSchema";

import {
    CASE_UNAUTHORIZED_MESSAGE,
    CASE_NOT_FOUND_MESSAGE,
    CASE_SUCCESS_MESSAGE,
} from "../config/messages";

import sections from "../config/sections";
import statuses from "../config/statuses";

const { PROJECTS } = sections;
const { UNAUTHORIZED, NOT_FOUND } = statuses;

export const getProjectsContent = (req, res, next) => {
    ProjectsSchema.find({}, {}, (err, projectsData) => {
        if (err || !projectsData) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE(PROJECTS),
            });
            next(err);
        } else if (!projectsData) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE(PROJECTS),
            });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE(PROJECTS),
                projectsData,
            });
        }
    });
};
