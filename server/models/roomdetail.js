'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomDetail = sequelize.define('RoomDetail', {
    UserID: DataTypes.INTEGER,
    RoomId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  RoomDetail.associate = function(models) {
    RoomDetail.belongsTo(models.Room)
  };
  return RoomDetail;
};