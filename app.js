/**
 * Front controller
 */

/* Load module dependencies */
var express = require('express'),
app = express(),
http = require('http');

/* Load config environment */
app.config = require('./config/config')(app, express);

/* Load routing directive */
app.router = require('./config/routing')(app);

/* Create server */
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});