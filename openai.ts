import openAi from "openai";

const openai = new openAi({
  organization: process.env.OPEN_AI_ORGANIZATION,
  apiKey: process.env.OPEN_AI_KEY,
});

export default openai;
