var fs = require('fs'),
    http = require('http');

http.get({ host: 'facebook.com' }, function(res) {
    console.log("Got a response from facebook.com");
}).on('error', function(e) {
    console.log("There was an error from shapeshed.com");
});

fs.readFile('file1.txt', 'utf8', function (err, data) {
    if (err) { throw err; }
    console.log('File 1 read!' + data);
});

http.get({ host: 'www.youtube.com' }, function(res) {
    console.log("Got a response from youtube.com");
}).on('error', function(e) {
    console.log("There was an error from bbc.co.uk");
});

fs.readFile('file2.txt', 'utf8', function (err, data) {
    if (err) { throw err; }
    console.log('File 2 read!' + data);
});
