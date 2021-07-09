var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("hello from /users!");
});

router.get("/cool", function (req, res, next) {
  res.send("Pedro is so cool!");
});

module.exports = router;
