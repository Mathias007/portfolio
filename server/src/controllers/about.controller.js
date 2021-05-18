import { AboutSchema } from "../schema/AboutSchema";

import {
    CASE_UNAUTHORIZED_MESSAGE,
    CASE_NOT_FOUND_MESSAGE,
    CASE_SUCCESS_MESSAGE,
} from "../config/messages";

import sections from "../config/sections";
import statuses from "../config/statuses";

const { ABOUT } = sections;
const { UNAUTHORIZED, NOT_FOUND } = statuses;

export const getAboutContent = (req, res, next) => {
    AboutSchema.find({}, {}, (err, aboutData) => {
        if (err || !aboutData) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE(ABOUT),
            });
            next(err);
        } else if (!aboutData) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE(ABOUT),
            });
        } else {
            res.json({ message: CASE_SUCCESS_MESSAGE(ABOUT), aboutData });
        }
    });
};
