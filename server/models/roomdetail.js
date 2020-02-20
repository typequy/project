'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class RoomDetail extends Model {}

  RoomDetail.init({
    UserId: {
      type: DataTypes.INTEGER,
    },
    RoomId: {
      type: DataTypes.INTEGER,
    },
    score: {
      type: DataTypes.INTEGER,
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.score = 0
      }
    },
    sequelize});
  RoomDetail.associate = function(models) {
    RoomDetail.belongsTo(models.Room)
    RoomDetail.belongsTo(models.User)
  };
  return RoomDetail;
};