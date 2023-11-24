const { app } = require("@azure/functions");
const openai = require("../../utils/openai");
const axios = require("axios");
const generateSASToken = require("../../utils/generateSASToken");

const { BlobServiceClient, BlockBlobClient } = require("@azure/storage-blob");
const accountName = process.env.accountName;
const containerName = "images";

app.http("generateImage", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request) => {
    const { prompt } = await request.json();
    console.log(`prompt is ${[prompt]}`);
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    image_url = response.data[0].url;

    const res = await axios.get(image_url, { responseType: "arraybuffer" });
    const arrayBuffer = res.data;

    sasToken = await generateSASToken();
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net?${sasToken}`
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);

    const timestamp = new Date().getTime();
    const file_name = `${prompt}_${timestamp}.png`;

    const blobBlockClient = containerClient.getBlockBlobClient(file_name);

    try {
      await blobBlockClient.uploadData(arrayBuffer);
      console.log("uploaded client successfully");
    } catch (error) {
      console.log("uploaded client failed", error.message);

      console.error("error uploading file: ", error.message);
    }
  },
});
