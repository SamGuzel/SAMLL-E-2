const openAi = require("openai");

const openai = new openAi({
  apiKey: process.env.OPEN_AI_KEY,
});

module.exports = openai;
