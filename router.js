const express = require("express");
const router = express.Router();
const messageController = require("./controllers/message.controller");

router.get("/messages", messageController.getAllMessages);
router.post("/messages", messageController.saveMessage);

module.exports = router;
