// Set requirement and dependencies
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var htmlRoutes = require("./app/routing/htmlRoutes")
var apiRoutes = require("./app/routing/apiRoutes")


// set up express server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('app/public'))

app.use(htmlRoutes);
app.use(apiRoutes);


// message to alert the user of the port that is being used and the server is on and "listening"
app.listen(PORT, function(req, res) {
    console.log("Listening on port: " + PORT)
});