import openAi from "openai";

const openai = new openAi({
  apiKey: process.env.OPEN_AI_KEY,
});

export default openai;
