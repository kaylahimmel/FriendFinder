var express = require("express");

var router = express.Router({
    //set api calls here
});


// set a get route to survey.htmlø
router.get("/survey", function(req, res) {
    fs.readFile(__dirname + "/survey.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
});


// set default catch-all "landing" page as home.html
router.get("/", function(req, res) {
    fs.readFile(__dirname + "/home.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    })
});