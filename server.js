var express = require("express");
var app = express();
bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type "}));
app.use(bodyParser.text({ type: "text/html" }));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


// // REQUIREMENTS
// var path = require("path");
// var express = require("express");
// var api = require("./apiRoutes")
// var html = require("./htmlRoutes")
// var router = express();

// require("./app/routing/apiRoutes.js")(router);
// require("./app/routing/htmlRoutes.js")(router);


// var port = 8080;

// router.use(express.json())

// // set default "landing" page as home.html
// router.get("/", function(req, res) {
//     fs.readFile(__dirname + "/home.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     })
// });

// // function that plugs in the page name to create the redirect
// router.get("/:page", function(req, res) {
//     var page = req.params.page
//     fs.readFile(__dirname + "/" + page, function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     })
// });

// // function that takes the user's inputs and posts them to one of our arrays in the table.js file
// router.post("/", function(req, res) {
//     res.end(req.body)
// });

// // message to alert the user of the port that is being used and the server is on and "listening"
// router.listen(port, function(req, res) {
//     console.log("Listening on port: " + port)
// });