const mongoose = require("mongoose");
const app = require("./app"); // adjust path if needed
const { MONGO_URI, PORT } = require("./config/env"); // "./config/env" is correct

console.log("Loaded MONGO_URI:", MONGO_URI);


mongoose
  .connect(MONGO_URI)

  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  });
