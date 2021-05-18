import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Quotes = new Schema({}, { strict: false });

export const QuotesSchema = mongoose.model(
    "portfolio_quotes",
    Quotes,
    "portfolio_quotes"
);
