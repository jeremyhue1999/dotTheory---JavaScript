const https = require("https");

function getDef(term) {
  try {
    const request = https.get(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${term}?key=609cf02e-f143-48f0-bb51-1f891f0361fd`,
      (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data.toString();
        });
        response.on("end", () => {
          const definition = JSON.parse(body);

          console.log(definition[0].shortdef);
        });
      }
    );
    request.on("error", (error) => console.error(error.message));
  } catch (error) {
    console.error(error);
  }
}

const query = process.argv.slice(2);
query.forEach(getDef);
