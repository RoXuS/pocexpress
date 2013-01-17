/**
 * Config environment
 */

/* Load module dependencies */
var path = require('path'),
    mongoose = require('mongoose');

module.exports = function(app, express){
    /* Open mongoose connection */
    mongoose.connect('mongodb://localhost/pocexpress', function(err){
        if (err) { throw err; }
    });

    /* Configure environment */
    app.configure(function(){
        app.set('port', process.env.PORT || 3000);
        app.set('views', __dirname + '/../views');
        app.set('view engine', 'jade');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(path.join(__dirname, '/../public')));
        app.controller = {};
    });
    app.configure('development', function(){
        app.use(express.errorHandler());
    });
};