var User = require('../app/controllers/user');
var path = require('path');

module.exports = function(app) {
	// Index
	app.get('/', function(req, res) {
		res.render('index', { title: 'Express' });
	});

	// User
	app.post('/user/signup', User.signup);
	app.post('/user/login', User.login);

	
}
