// Pull required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {

	// Go to Homepage
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	//  Go to Survey page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};