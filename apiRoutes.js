var express = require("express");

var router = express.Router();

// Import the friends.js data
var friends = require('../data/friends.js');


// Export API routes
module.exports = function(router) {

	// GET route to pull in the full "friends" array of objects as JSON objects
	router.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new user to "friends" array
	router.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;
		var userResponses = userInput.scores;
		var friendName = "";
        var friendImage = "";
		var totalDifference = 100; 
        // compare user's answers to others in the "friends" array and return the closest match
        for (var i = 0; i < friends.length; i++) {
            // console.log('friend = ' + JSON.stringify(friends[i]));

            // Compute differenes for each question
            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            // If lowest difference, record the friend match
            if (diff < totalDifference) {
                totalDifference = diff;
                friendName = friends[i].name;
                friendImage = friends[i].photo;
            }
        }

    // Add new user
    friends.push(userInput);

    // Send appropriate response
    res.json({status: 'OK', matchName: friendName, matchImage: friendImage});
    });
};