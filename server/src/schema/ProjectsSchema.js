import mongoose from "mongoose";

import { collections } from "../config/names";

const Schema = mongoose.Schema;

const Projects = new Schema({}, { strict: false });

export const ProjectsSchema = mongoose.model(
    collections.projects,
    Projects,
    collections.projects
);
