var params = require('../config');

module.exports = {
  signIn(req, res, next) {

    var resolver = Math.random() < 0.5,
      status, payload;

    if (resolver) {
      status = 400;
      payload = { error: 'Wrong email or password' };
    } else {
      status = 200;
      payload = { user: 'Maks', email: 'example@email.com', token: params.demoToken };
    }

    res.status(status).json(payload);
  },

  signUp(req, res, next) {

    var resolver = Math.random() < 0.5,
      status, payload;

    if (resolver) {
      status = 400;
      payload = { error: 'User with provided email already exist' };
    } else {
      status = 200;
      payload = { user: 'Maks', email: 'example@email.com', token: params.demoToken };
    }

    res.status(status).json(payload);

  }
}
