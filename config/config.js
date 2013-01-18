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

    PocExpress.app.controller = {};
    PocExpress.app.model = {};

    /* Configure environment */
    PocExpress.app.configure(function(){
        PocExpress.app.set('port', process.env.PORT || 3000);
        PocExpress.app.set('views', __dirname + '/../views');
        PocExpress.app.set('view engine', 'jade');
        PocExpress.app.use(express.favicon());
        PocExpress.app.use(express.logger('dev'));
        PocExpress.app.use(express.bodyParser());
        PocExpress.app.use(express.methodOverride());
        PocExpress.app.use(PocExpress.app.router);
        PocExpress.app.use(express.static(path.join(__dirname, '/../public')));
    });
    PocExpress.app.configure('development', function(){
        PocExpress.app.use(express.errorHandler());
    });
};