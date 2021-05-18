import { TechnologiesSchema } from "../schema/TechnologiesSchema";

import {
    CASE_UNAUTHORIZED_MESSAGE,
    CASE_NOT_FOUND_MESSAGE,
    CASE_SUCCESS_MESSAGE,
} from "../config/messages";

import sections from "../config/sections";
import statuses from "../config/statuses";

const { TECHNOLOGIES } = sections;
const { UNAUTHORIZED, NOT_FOUND } = statuses;

export const getTechnologiesContent = (req, res, next) => {
    TechnologiesSchema.find({}, {}, (err, technologiesData) => {
        if (err || !technologiesData) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE(TECHNOLOGIES),
            });
            next(err);
        } else if (!technologiesData) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE(TECHNOLOGIES),
            });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE(TECHNOLOGIES),
                technologiesData,
            });
        }
    });
};
