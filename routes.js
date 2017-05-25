var UserController = require('./controllers/UserController');

module.exports = function(app) {

  ////// USERS ///////
	app.get('/users',      UserController.readAll);
  app.get('/users/:id',  UserController.read);
  app.post('/users',     UserController.create);

};