const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Fortune = require("../models/Fortune");
const fortunes = require("../../fortunes.json");
const connectDB = require("../config/db");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Fortune.deleteMany();
    await Fortune.insertMany(fortunes);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
