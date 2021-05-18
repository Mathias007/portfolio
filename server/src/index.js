import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import routes from "./routes";
import {
    DATABASE_CONNECTION_ERROR_MESSAGE,
    PORT_LISTENING_START_MESSAGE,
} from "./config/messages";

import config from "./config/config";
const { NODE_PORT, MONGO_URI, CORS_ORIGIN } = config;

const app = express();

const corsOptions = {
    origin: CORS_ORIGIN,
};
app.use(cors(corsOptions));

mongoose
    .connect(MONGO_URI, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .catch((err) => console.log(DATABASE_CONNECTION_ERROR_MESSAGE(err)));

app.use("/", routes);
app.listen(NODE_PORT, () => {
    console.log(PORT_LISTENING_START_MESSAGE(NODE_PORT));
});
