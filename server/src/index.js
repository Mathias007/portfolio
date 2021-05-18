const path = require("path");

const dotenv = require("dotenv");
dotenv.config(); 

const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(process.env.NODE_PORT, () => {
    console.log(`server started on port ${process.env.NODE_PORT}`);
});
