var http = require('http');

// Make a get petition to the server 

http.get({ host : 'shapeshed.com' } , function(res) {
	console.log("Server Response: " + res.statusCode);
}).on('error', function(e) {
	console.log("Got error: " + e.message);
})