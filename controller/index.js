/*
 * Controller Index
 */

/* Get schema */
var Schema1 = require('../model/schema1.js');

/* Method index */
exports.index = function(req, res){
	res.render('index', { title: 'PocExpress' });
};

/* Method post */
exports.post = function(req, res) {
    var newSchema1 = new Schema1({title: req.body.title, author: req.body.author});
    newSchema1.save();
    res.send(newSchema1);
};

/* Method list
exports.list = function(req, res) {
	Schema1.find(function(err, schemas) {
		res.render('index', { schemas : schemas});
	});
};
*/