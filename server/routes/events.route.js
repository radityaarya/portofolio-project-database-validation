var express = require('express');
var router  = express.Router();
var controller = require('../controllers/events.controller.js')

router.get('/', controller.getAllEvents)
router.post('/create', controller.createEvent)

module.exports = router;
