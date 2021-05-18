import mongoose from "mongoose";

const Schema = mongoose.Schema;

const About = new Schema({}, { strict: false });

export const AboutSchema = mongoose.model("portfolio_about", About, "portfolio_about");
