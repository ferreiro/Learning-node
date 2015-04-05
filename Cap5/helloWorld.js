var http = require('http');

// function(require, res) {} ** Función anónima

http.createServer(function(req, res) {
	// res.writeHead(200, {'Content-Type': 'text/plain' });
	res.writeHead(301, {'Location' : 'http://www.youtube.com/'});
	res.end();
	//res.end("Hello World \n"); // Qué hacer cuando recibe la petición
}).listen(3000, "127.0.0.1"); 

console.log("Server Runinng on port: http://127.0.0.1:3000");
