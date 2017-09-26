var auth = require('../controllers/auth');

module.exports = function (app) {
  app.post('/sign-in', auth.signIn);
  app.post('/sign-up', auth.signUp);
}
