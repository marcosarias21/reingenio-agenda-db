require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  const DB = process.env.DB;
  try {
    await mongoose.connect(DB);
    console.log("Conectado a la DB");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
