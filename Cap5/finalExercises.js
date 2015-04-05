/**** 
*	1 
* 	Crear una cabecera que le pase el código 501
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(501);
	res.end("Yoooooo biach!");
}).listen(2000, "127.0.0.1");

console.log("Server run on server. 127.0.0.1:2000");


*****/

//	Second Activity
/*
var http = require('http'),
	url = require('url');

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;

	if(pathname === "/") {
		res.writeHead(200);
		res.end("You're at home");
	}
	else if (pathname === "/about") { 
		res.writeHead(200, {
			'ContentType' : 'text/plain',
			'Date' : new Date()
		});
		res.end("You're in about " + new Date());
	}

}).listen(2000, "127.0.0.1");

console.log("Server running on 127.0.0.1:2000");
*/


var http = require('http');
var options = [
{
	'host' : 'music4deejays.com',
	'port' : 80,
	'path' : '/'
},
{
	'host' : 'shapeshed.com',
	'port' : 80,
	'path' : '/'
}
];

for (var i = 0; i < options.length; i++) {
	http.get(options[i], function(res) {
		if (res.statusCode == 200) {
			console.log("The site is up");
		}
		else {
			console.log("The site is down");
		}
	}).on('error', function(e) {
		console.log("There was an error " + e.message);
	})
}


