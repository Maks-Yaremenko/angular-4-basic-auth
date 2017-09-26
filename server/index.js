var express = require('express');

var app = express();

require('./config')(app);
require('./routes')(app);

app.listen(app.get('port'), function(){
  console.log(`Express server listening on port ${app.get('port')} in ${app.get('env')} mode'`);
});
