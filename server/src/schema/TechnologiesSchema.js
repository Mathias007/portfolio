import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Technologies = new Schema({}, { strict: false });

export const TechnologiesSchema = mongoose.model(
    "portfolio_technologies",
    Technologies,
    "portfolio_technologies"
);
