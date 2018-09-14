var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let random = Math.random() * (5000 - 1000) + 1000
  setTimeout(function () {res.send(random.toString())}, random)
});

module.exports = router;
