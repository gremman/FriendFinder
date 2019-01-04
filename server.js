// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Routes
// ===========================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Listener
// ===========================================================
app.listen(port, function() {
    console.log("App listening on PORT " + port);
});