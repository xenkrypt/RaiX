const express = require("express");
const { getFortunes, addFortune, getRandomFortune } = require("../controllers/fortuneController");

const router = express.Router();

router.get("/", getFortunes);
router.post("/", addFortune);
router.get("/random", getRandomFortune); // 👈 new random route

module.exports = router;
