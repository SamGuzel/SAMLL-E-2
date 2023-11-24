const { app } = require("@azure/functions");
const openai = require("../../utils/openai");

app.http("getChatGPTSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt:
        "Write a random text prompt for DALL-E to generate an image, this prompt will be shown to the user, include details such as the genre and what type of painting or image it should be. for example oil painting, watercolor, photo-realistic, 4k, abstract, modern etc. Do not wrap the answer in quotes.",
      max_tokens: 100,
      temperature: 0.8,
    });
    context.log("http function processed for url", request.url);
    const responseText = response.choices[0].text;

    return { body: responseText };
  },
});
