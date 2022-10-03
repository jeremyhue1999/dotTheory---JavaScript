//modifies the data callback to concatenate the stream of data to the responseBody.
//Fixes the listener so that the callback gets executed when the response has fully finished.
const https = require("https");
const request = https.get(
  "https://teamtreehouse.com/chalkers.json",
  (response) => {
    let responseBody = "";

    response.on("data", (dataChunk) => {
      responseBody += dataChunk.toString();
    });

    response.on("end", () => {
      console.log(responseBody);
    });
  }
);

request.on("error", (error) => {
  console.error(error.message);
});
