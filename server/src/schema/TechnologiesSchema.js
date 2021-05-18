import mongoose from "mongoose";

import { collections } from "../config/names";

const Schema = mongoose.Schema;

const Technologies = new Schema({}, { strict: false });

export const TechnologiesSchema = mongoose.model(
    collections.technologies,
    Technologies,
    collections.technologies
);
