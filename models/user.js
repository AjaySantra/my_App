'use strict';
// models/user.js
var models = require('../models');


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Listing);
      }
    }
  });
  return User;
};
