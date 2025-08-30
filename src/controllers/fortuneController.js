// src/controllers/fortuneController.js
const Fortune = require("../models/Fortune");

// get all fortunes
const getFortunes = async (req, res) => {
  try {
    const fortunes = await Fortune.find();
    res.json(fortunes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch fortunes" });
  }
};

// add a fortune
const addFortune = async (req, res) => {
  try {
    console.log("Request body:", req.body); // 👈 debug
    const fortune = new Fortune(req.body);
    await fortune.save();
    res.status(201).json(fortune);
  } catch (err) {
    console.error("Error adding fortune:", err); // 👈 log the actual error
    res.status(400).json({ error: "Failed to add fortune" });
  }
};


// get random fortune
const getRandomFortune = async (req, res) => {
  try {
    const count = await Fortune.countDocuments();
    const random = Math.floor(Math.random() * count);
    const fortune = await Fortune.findOne().skip(random);
    res.json(fortune);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch random fortune" });
  }
};

module.exports = { getFortunes, addFortune, getRandomFortune };
