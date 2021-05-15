const model = require('./model');

async function serveMessages(req, res) {
  const messages = await model.getMessages();
  res.status(200);
  res.send(messages);
}

function postMessage(req, res) {
  const messageSaved = model.saveMessage(req.body);
  if (messageSaved) {
    res.status(201);
  } else {
    res.status(500);
    res.send("Message not saved");
  }
}


module.exports = {
  serveMessages,
  postMessage
};
