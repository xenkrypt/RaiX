const mongoose = require("mongoose");

const fortuneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model("Fortune", fortuneSchema);
