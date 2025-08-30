const Ollama = require("ollama");

const askRaiX = async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const response = await Ollama.default.chat({
      model: "RaiX:latest",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = response?.message?.content || "No response";
    res.json({ reply });
  } catch (error) {
    console.error("Ollama error:", error);
    res.status(500).json({ error: "Ollama request failed" });
  }
};

module.exports = { askRaiX };
