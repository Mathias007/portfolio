import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Projects = new Schema({}, { strict: false });

export const ProjectsSchema = mongoose.model(
    "portfolio_projects",
    Projects,
    "portfolio_projects"
);
