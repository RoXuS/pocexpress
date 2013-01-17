/**
 * Front controller
 */

/* Load module dependencies */
var express = require('express'),
http = require('http');

console.log('toto1');
/* Load app instance */
require('./common')(express);

console.log('toto2');
/* Load config environment */
require('./config/config')(express);

console.log('toto3');
/* Load autoloader */
require('./autoloader')();

console.log('toto4');
/* Load routing directive */
require('./config/routing')(Common.app);

/* Create server */
http.createServer(Common.app).listen(Common.app.get('port'), function(){
  console.log("Express server listening on port " + Common.app.get('port'));
});