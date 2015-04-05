var http = require('http'),
	url  = require('url');

http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;

	if (pathname === "/") {
		res.writeHead(200, {
			'Content-Type' : 'text/plain'
		});
		res.end("Homeeeeee");
	}
	else if (pathname === "/about") {
		res.writeHead(200, {
			'Content-Type' : 'text/plain'
		});
		res.end("This is the page About");
	}
	else if (pathname === "/redirect") {
		res.writeHead(301, {
			'Location' : 'https://www.youtube.com'
		});
		res.end(); // Importante!!! ponerlo para que funcione!!!
	}
	else {
		res.writeHead(404, {
			'Content-Type' : 'text/plain'
		});
		res.end("Not Found");
	}
}).listen(3002, "127.0.0.1");

console.log("Server Running on http://127.0.0.1:3002")
