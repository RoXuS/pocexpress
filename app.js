/**
 * Front controller
 */

/* Load module dependencies */
var express = require('express'),
http = require('http'),
Common = require('./common');

/* Load app instance */
PocExpress = new Common(express);

/* Load config environment */
require('./config/config')(express);

/* Load autoloader */
require('./autoloader')();

/* Load routing directive */
require('./config/routing')(PocExpress.app);

/* Create server */
http.createServer(PocExpress.app).listen(PocExpress.app.get('port'), function(){
  console.log("Express server listening on port " + PocExpress.app.get('port'));
});