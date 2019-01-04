//This file needs to be able to get all matches and input new matches and return result
var friends = require("../../app/data/friends");

module.exports = function(app) {
    //Get all the friends	
    app.get("../data/friends.js", function(req, res) {
        res.json(friends);
    });

    // Adding new survey info to the array
    app.post("/api/new", function(req, res) {
        var userData = req.body;
        console.log(userData);

        console.log(friends);
        friends.push(userData);

        //logic for comparing the arrays for differences
        var bestmatch;
        var bestscore = 999;

        for (var i = 0; i < friends.length; i++) {
            var score = 0;
            for (var j = 0; j < 10; j++) {
                var partialsum = Math.abs(friends[i].scores[j] - userData.scores[j]);
                score += partialsum;
            }
            if (score < bestscore) {
                bestscore = score;
                bestmatch = i;
            }
        }

        res.json(friends[bestmatch]);
    });

    return app;
};