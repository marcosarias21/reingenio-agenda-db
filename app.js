require("./database/db");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const indexRoute = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/index", indexRoute);

mongoose.set("strictQuery", true);

module.exports = app;
