var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var user = {
		name : 'Enrique',
		surname: 'Socias',
		city: 'Lisboa',
		phone: '684000000'
	}
	res.render('index.jade', {
		title: 'Personal Data',
		user: user
	});
});

module.exports = router;
