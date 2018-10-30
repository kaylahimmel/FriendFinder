// requirements 
var express = require("express");
var friendArray = require('../data/friends.js');

// Create express router
var router = express.Router();


// Export API routes to use in other parts of the code
module.exports = function(router) {

	// GET route to pull in the full "friendArray" array of objects as JSON objects
	router.get('/api/friends', function(req, res) {
		res.json(friendArray);
	});

	// POST route to add userInput to the "friendArray" array and parse out the scores for finding the difference
	router.post('/api/friends', function(req, res) {
		var userInput = req.body;
		var userResponses = userInput.scores;
        var userName = userInput.name;
        var userPhoto = userInput.photo;
        var totalDifference = 0; 
        
        // compare user's answers to others in the "friendArray" array and return the closest match
        for (var i = 0; i < friendArray.length; i++) {
            // Set "answerDiff" to a numeric value for later use
            var answerDiff = 0;
            // For loop to find the differences in responses between user and existing members in the "friendArray"
            for (var k = 0; k < userResponses.length; k++) {
                answerDiff += (Math.abs(parseInt(friendArray[i].scores[k]) - parseInt(userResponses[k])));
            }

            // If lowest difference, record the friend match
            if (answerDiff < totalDifference) {
                totalDifference = answerDiff;
                friendName = friendArray[i].name;
                friendImage = friendArray[i].photo;
            }
        };

        // Add new user's responses to the "friendArray" array
        friendArray.push(userInput);

        // Send JSON response of the new friend match
        res.json({status: 'OK', friendName: friendName, friendImage: friendImage});
    });
};