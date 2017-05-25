var User = require('../models/UserModel');

module.exports = {

	create: function(req, res) {
    if (!req.body.name) {
      return res.status(400).send('Name must be provided');
    }

    User.create({
      username: req.body.name,
      age: req.body.age
    }).then(function(result) {
      return res.send(result.get({
        plain: true
      }));
    }).catch(function(error) {
      return res.status(400).send(error.errors);
    });
	},

	readAll: function(req, res) {
    User.findAll().then(function(result) {
      res.send(result);
    });
  },

  read: function(req, res) {
    var name = req.params.id;

    User.find({
      where: {
        username: name
      }
    }).then(function(result) {
      return res.send(result.get({
        plain: true
      }));
    }).catch(function(error) {
      return res.send(error);
    });
  }

};
/* arguments demo
    var page = req.query.page || 0;
    var count = req.query.count || 10;

    res.send({
      'param': urlParam,
      'page': page,
      'count': count
    });
  }
  */