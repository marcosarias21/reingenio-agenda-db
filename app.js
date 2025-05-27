require("./database/db");

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const agendaRouter = require("./routes/agendaRoute");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/contactos", agendaRouter);

mongoose.set("strictQuery", true);

module.exports = app;
