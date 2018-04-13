var express = require('express');
var router = express.Router();
const fieldController = require('../controllers/field');

router.get('/api/fields', fieldController.all);

module.exports = router;
