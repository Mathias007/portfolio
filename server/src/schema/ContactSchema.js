import mongoose from "mongoose";

import { collections } from "../config/names";

const Schema = mongoose.Schema;

const Contact = new Schema({}, { strict: false });

export const ContactSchema = mongoose.model(
    collections.contact,
    Contact,
    collections.contact
);
