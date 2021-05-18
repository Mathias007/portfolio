import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Contact = new Schema({}, { strict: false });

export const ContactSchema = mongoose.model(
    "portfolio_contact",
    Contact,
    "portfolio_contact"
);
