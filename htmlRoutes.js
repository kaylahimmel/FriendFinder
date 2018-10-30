var express = require("express");

var router = express.Router();


// set a get route to survey.htmlø
router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});


// set default catch-all "landing" page as home.html
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});