var express = require("express");
var router = express.Router();
var fs = require("fs");
var users = `${__dirname}/users.json`;

/* GET users listing. */
router.get("/", function (req, res, next) {
  
  res.send('hello');
});

router.post("/", (req, res) => {
  console.log(req.body)
});
