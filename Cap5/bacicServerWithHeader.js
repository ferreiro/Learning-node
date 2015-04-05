var http = require('http');

http.createServer(function(req, res) {
	res.writeHeader(200, {
		'Content-Type' : 'text/plain'
	});
	res.end("Server with Header running!");
}).listen(3000, "127.0.0.1");

console.log("Server with Header running on http://127.0.0.1:3000");