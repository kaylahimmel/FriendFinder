// var express = require("express");
// var app = express();
// bodyParser = require("body-parser");

// var PORT = process.env.PORT || 8080;

// var jsonParser = bodyParser.json();
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(bodyParser.json({ type: "application/*+json" }));
// app.use(bodyParser.raw({ type: "application/vnd.custom-type "}));
// app.use(bodyParser.text({ type: "text/html" }));

// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });


// REQUIREMENTS
var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 8080;
var htmlRoutes = require("./app/routing/htmlRoutes")
var apiRoutes = require("./app/routing/apiRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);


// set default "landing" page as home.html
// app.get("/", function(req, res) {
//     fs.readFile(__dirname + "/home.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     })
// });

// // function that plugs in the page name to create the redirect
// app.get("/:page", function(req, res) {
//     var page = req.params.page
//     fs.readFile(__dirname + "/" + page, function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//     })
// });

// // function that takes the user's inputs and posts them to one of our arrays in the table.js file
// app.post("/", function(req, res) {
//     res.end(req.body)
// });

// message to alert the user of the port that is being used and the server is on and "listening"
app.listen(PORT, function(req, res) {
    console.log("Listening on port: " + PORT)
});