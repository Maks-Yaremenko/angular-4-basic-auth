var bodyParser = require('body-parser');
var cors = require('cors');

const params = require('./config');

module.exports = function (app) {

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cors());
  app.set('port', params.port);

}
