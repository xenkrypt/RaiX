const Ollama = require("ollama");

const translateToJapanese = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text is required" });

    const response = await Ollama.default.chat({
      model: "llama3.2", // use the exact name you pulled
      messages: [
        {
          role: "system",
          content: `
You are a professional Japanese translator. 
You always translate English into natural, elegant Japanese CORRECT TRANSLATED sentences. 
Use only Japanese characters (kanji, hiragana, katakana). 
Do NOT output Romaji. 
Do NOT add any parentheses, quotes, punctuation, or extra explanation. 
Output must be ONLY the Japanese translation, nothing else.
          `,
        },
        {
          role: "user",
          content: text, // no quotes around it, keep it raw
        },
      ],
    });

    // Some Ollama builds return { message }, some return { messages: [] }
    let translation =
      response?.message?.content ||
      response?.messages?.[0]?.content ||
      null;

    if (!translation) {
      console.error("Ollama response shape:", response);
      return res.status(500).json({ error: "Empty translation from Ollama" });
    }

    res.json({ translation: translation.trim() });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "Ollama translation request failed" });
  }
};

module.exports = { translateToJapanese };
