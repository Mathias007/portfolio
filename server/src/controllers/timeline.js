import { TimelineSchema } from "../schema/TimelineSchema";

import {
    CASE_UNAUTHORIZED_MESSAGE,
    CASE_NOT_FOUND_MESSAGE,
    CASE_SUCCESS_MESSAGE,
} from "../config/messages";

import sections from "../config/sections";
import statuses from "../config/statuses";

const { TIMELINE } = sections;
const { UNAUTHORIZED, NOT_FOUND } = statuses;

export const getTimelineContent = (req, res, next) => {
    TimelineSchema.find({}, {}, (err, timelineData) => {
        if (err || !timelineData) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE(TIMELINE),
            });
            next(err);
        } else if (!timelineData) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE(TIMELINE),
            });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE(TIMELINE),
                timelineData,
            });
        }
    });
};
