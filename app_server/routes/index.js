var express = require('express');
var router = express.Router();


var pagesController = require('../controllers/pagesController')

/* GET home page. */
router.get('/', pagesController.mainpage);

module.exports = router;
