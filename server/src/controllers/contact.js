import { ContactSchema } from "../schema/ContactSchema";

import {
    CASE_UNAUTHORIZED_MESSAGE,
    CASE_NOT_FOUND_MESSAGE,
    CASE_SUCCESS_MESSAGE,
} from "../config/messages";

import sections from "../config/sections";
import statuses from "../config/statuses";

const { CONTACT } = sections;
const { UNAUTHORIZED, NOT_FOUND } = statuses;

export const getContactContent = (req, res, next) => {
    ContactSchema.find({}, {}, (err, contactData) => {
        if (err || !contactData) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE(CONTACT),
            });
            next(err);
        } else if (!contactData) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE(CONTACT),
            });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE(CONTACT),
                contactData,
            });
        }
    });
};
