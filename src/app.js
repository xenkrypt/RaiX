const express = require("express");
const cors = require("cors");
const fortuneRoutes = require("./routes/fortuneRoutes");
const ollamaRoutes = require("./routes/ollamaRoutes");
const translationRoutes = require("./routes/translationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/fortunes", fortuneRoutes);
app.use("/api/ollama", ollamaRoutes);
app.use("/api", translationRoutes); // now includes POST /api/translate

module.exports = app;
