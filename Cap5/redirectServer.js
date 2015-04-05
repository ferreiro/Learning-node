var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(301, {
		'Location' : 'http://www.music4deejays.com'
	})
	res.end("Redirecting");
}).listen(3000, "127.0.0.1");

console.log("Server Running on http://127.0.0.1:3000")