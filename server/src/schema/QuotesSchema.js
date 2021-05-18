import mongoose from "mongoose";

import { collections } from "../config/names";

const Schema = mongoose.Schema;

const Quotes = new Schema({}, { strict: false });

export const QuotesSchema = mongoose.model(
    collections.quotes,
    Quotes,
    collections.quotes
);
