var url = require('url'),
	requestURL = "https://www.google.es/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=busqueda%20de%20prueba";

console.log(url.parse(requestURL));
console.log("Hostname " + url.parse(requestURL).hostname);
console.log("Port " + url.parse(requestURL).port);
console.log("Pathname " + url.parse(requestURL).pathname);
