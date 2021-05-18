import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Timeline = new Schema({}, { strict: false });

export const TimelineSchema = mongoose.model(
    "portfolio_timeline",
    Timeline,
    "portfolio_timeline"
);
