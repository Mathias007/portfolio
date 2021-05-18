import mongoose from "mongoose";

import { collections } from "../config/names";

const Schema = mongoose.Schema;

const About = new Schema({}, { strict: false });

export const AboutSchema = mongoose.model(
    collections.about,
    About,
    collections.about
);
