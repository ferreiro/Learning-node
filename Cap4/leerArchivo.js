var fs = require('fs');

fs.readFile("enrique.txt", "utf-8", function(err, data) {
	if (err) throw err
	console.log("El archivo " + fileName + " contiene: " + data);
});