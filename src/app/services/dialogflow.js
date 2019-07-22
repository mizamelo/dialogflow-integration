const { SessionsClient } = require("dialogflow").v2beta1;
const path = require("path");
const uuid = require("uuid/v1");

const client = new SessionsClient({
  keyFilename: path.resolve(`${__dirname}/client_secret_google.json`)
});

const sendToDialogFlow = async (text, wcl, type) => {
  const request = {
    session: client.sessionPath("adfm-chatbot-iniiki", uuid()),
    queryInput: {
      text: {
        text,
        languageCode: "pt-BR"
      }
    }
  };

  return await client.detectIntent(request);
};

module.exports = sendToDialogFlow;
