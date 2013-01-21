module.exports = function(){
	var fs = require("fs");

	fs.readdirSync("./model").forEach(
		function(file) {
			var modelName = file.replace(".js","");
			PocExpress.app.model[modelName] = "../model/" + file;
		}
	);

	fs.readdirSync("./controller").forEach(
		function(file) {
			var controllerName = file.replace(".js","");
			PocExpress.app.controller[controllerName] = require("./controller/" + file);
		}
	);
};