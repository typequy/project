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
    },
    status: {
      type: DataTypes.STRING
    }
  }, {sequelize});

  Room.associate = function(models) {
    Room.hasMany(models.RoomDetail)
  };
  return Room;
};