module.exports = function(app){
	require("fs").readdirSync("./controller").forEach(function(file) {
		var controllerName = file.replace(".js","");
		app.controller[controllerName] = require("./controller/" + file);
	});
};