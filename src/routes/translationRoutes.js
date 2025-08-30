// ./src/routes/translationRoutes.js
const express = require("express");
const { translateToJapanese } = require("../controllers/translationController");

const router = express.Router();

// This defines POST /api/translate
router.post("/translate", translateToJapanese);

module.exports = router;
