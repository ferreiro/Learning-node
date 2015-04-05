function haveBreakfast(food, drink, callback) {
	console.log('Having Breakfast of ' + food + ", " + drink );
	if (callback && typeof(callback) === "function") {
		callback();
	}
	else {
		console.log("Noooooooo");
	}
	console.log("----");
}

haveBreakfast("toast", "coffe", function() {
	console.log("Finished Breakfast. Time to Go work");
});
haveBreakfast("Hola", "Pepe", "Que tal")