var express = require('express');

var app = express();

var config = require('./config');
var routes = require('./routes');

config(app);
routes(app);

app.listen(app.get('port'), function(){
  console.log(`Express server listening on port ${app.get('port')} in ${app.get('env')} mode'`);
});
