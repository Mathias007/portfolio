import mongoose from "mongoose";

import { collections } from "../config/names";

const Schema = mongoose.Schema;

const Timeline = new Schema({}, { strict: false });

export const TimelineSchema = mongoose.model(
    collections.timeline,
    Timeline,
    collections.timeline
);
