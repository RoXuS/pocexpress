/**
 * Routing directive
 */

/* Load module dependencies */
var index = require('../controller/index'),
	user = require('../controller/user');

module.exports = function(app){
    app.get('/', index.index);
    app.post('/post', index.post);
};