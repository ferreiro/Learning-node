var http = require('http');

var options = {
	host : 'shapeshed.com',
	port : '80',
	path : '/'
}

http.get(options, function(res) {
	if (res.statusCode == 200) {
		console.log("Everybody fucking jump!!!");
	}
	else {
		console.log("The festival is over!!!");
	}
}).on('error', function(e) {
	console.log("YEP! Errors " + e.message);
})


































/*

First Version
var http = require('http');

var options = {
	'host': 'music4deejays.com',
	'port': 80,
	'path': '/'
};

http.get(options, function(res) {
	if (res.statusCode == 200) {
		console.log('Everthing is fucking ready!!');
	}
	else {
		console.log('Problems!!!');
	}
}).on('error', function(e) {
	console.log("There was an error " + e.message);
})

*/