'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
    }
  }, {sequelize});

  User.associate = function(models) {
    User.hasMany(models.RoomDetail)
  };
  return User;
};