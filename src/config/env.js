const path = require("path");
const dotenv = require("dotenv");

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
};
