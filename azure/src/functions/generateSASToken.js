const { app } = require("@azure/functions");
const generateSasToken = require("../../utils/generateSASToken");

app.http("generateSASToken", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    sasToken = await generateSasToken();

    return { body: sasToken };
  },
});
