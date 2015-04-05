var fs = require('fs');

fs.readFile("file.txt", "utf-8", function(data) {
	if (data) throw data
	console.log(data);
})

// fs.unlink("file2.txt", function(err) {
// 	if (err) throw err
// 	console.log("File errased");
// });