import { QuotesSchema } from "../schema/QuotesSchema";

import {
    CASE_UNAUTHORIZED_MESSAGE,
    CASE_NOT_FOUND_MESSAGE,
    CASE_SUCCESS_MESSAGE,
} from "../config/messages";

import sections from "../config/sections";
import statuses from "../config/statuses";

const { QUOTES } = sections;
const { UNAUTHORIZED, NOT_FOUND } = statuses;

export const getQuotesContent = (req, res, next) => {
    QuotesSchema.find({}, {}, (err, quotesData) => {
        if (err || !quotesData) {
            res.status(UNAUTHORIZED).send({
                message: CASE_UNAUTHORIZED_MESSAGE(QUOTES),
            });
            next(err);
        } else if (!quotesData) {
            res.status(NOT_FOUND).send({
                message: CASE_NOT_FOUND_MESSAGE(QUOTES),
            });
        } else {
            res.json({
                message: CASE_SUCCESS_MESSAGE(QUOTES),
                quotesData,
            });
        }
    });
};
