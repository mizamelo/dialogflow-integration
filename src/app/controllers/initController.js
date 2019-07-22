const sendToDialogFlow = require("../services/dialogflow");

class initController {
  async index(req, res) {
    const { message } = req.body;

    const response = await sendToDialogFlow(message);
    res.json({ response });
  }
}

module.exports = new initController();
