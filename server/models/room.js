'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class Room extends Model {}

  Room.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name is empty'
        }
      }
    }
  }, {sequelize});

  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};