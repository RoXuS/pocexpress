module.exports = function(app){
	require("fs").readdirSync("./controller").forEach(function(file) {
		var object = file.replace(".js","");
		app.controller[object] = require("./controller/" + file);
	});
};