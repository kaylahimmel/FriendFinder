var friendData = require("../data/friends");

module.exports = function(app) {
    // set a get route to "/api/friends" that displays a JSON object of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
  
    // set a post route to `/api/friends` that handles incoming survey results and compatibility logic
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
      
        console.log(newFriend);
      
        friendArray.push(newFriend);
      
        res.json(newFriend);
    });
};