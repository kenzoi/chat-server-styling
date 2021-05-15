const router = require('express').Router();
const controller = require('./controller');

router.get('/messages', controller.serveMessages);
router.post('/messages', controller.postMessage);

module.exports = router;
