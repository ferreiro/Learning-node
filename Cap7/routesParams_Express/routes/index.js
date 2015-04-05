var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
	var user = {
		name : 'Jorge',
		email: 'me@ho.com',
		city: 'Madrid'
	}
  res.render('index', { title: 'Express', user: user});
});

module.exports = router;
