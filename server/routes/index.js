module.exports = function (app) {

  require('./auth')(app);

  app.use(function(err, req, res, next) {
    console.log('WHOOPS SOMETHING WENT WRONG => ', err)
    res.status(500).send('WOPS SOMETHING WENT WRONG');
  });

}
