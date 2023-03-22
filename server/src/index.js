import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";

import {
    DATABASE_CONNECTION_ERROR_MESSAGE,
    PORT_LISTENING_START_MESSAGE,
} from "./config/messages";
import { database, paths } from "./config/names";
import config from "./config/config";

const { root } = paths;
const { NODE_PORT, MONGO_URI, CORS_ORIGIN } = config;

const app = express();

// Before build remove env cors origin (localhost) and use proper client url
const corsOptions = {
    origin: CORS_ORIGIN,
};
app.use(cors(corsOptions));

mongoose
    .connect(MONGO_URI, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        dbName: database
    })
    .catch((err) => console.log(DATABASE_CONNECTION_ERROR_MESSAGE(err)));

app.use(root, routes);

app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
    console.log(PORT_LISTENING_START_MESSAGE(NODE_PORT || 5000));
});
