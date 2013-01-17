/**
 * Config environment
 */

/* Load module dependencies */
var path = require('path'),
    mongoose = require('mongoose');

module.exports = function(express){
    /* Open mongoose connection */
    mongoose.connect('mongodb://localhost/pocexpress', function(err){
        if (err) { throw err; }
    });

    Common.app.controller = {};
    Common.app.model = {};

    /* Configure environment */
    Common.app.configure(function(){
        Common.app.set('port', process.env.PORT || 3000);
        Common.app.set('views', __dirname + '/../views');
        Common.app.set('view engine', 'jade');
        Common.app.use(express.favicon());
        Common.app.use(express.logger('dev'));
        Common.app.use(express.bodyParser());
        Common.app.use(express.methodOverride());
        Common.app.use(Common.app.router);
        Common.app.use(express.static(path.join(__dirname, '/../public')));
    });
    Common.app.configure('development', function(){
        Common.app.use(express.errorHandler());
    });
};