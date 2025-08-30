const express = require("express");
const { askRaiX } = require("../controllers/ollamaController");

const router = express.Router();

router.post("/ask", askRaiX);

module.exports = router;
