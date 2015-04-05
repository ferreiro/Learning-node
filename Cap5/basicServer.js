var http = require('http');

http.createServer(function(req, res) {
	res.end("Basic Server Running");
}).listen(3000, "127.0.0.1");

console.log("We're running a basic server on http://127.0.0.1:3000")