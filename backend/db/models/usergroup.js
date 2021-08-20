'use strict';
module.exports = (sequelize, DataTypes) => {
  const userGroup = sequelize.define('userGroup', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER
  }, {});
  userGroup.associate = function(models) {
    userGroup.hasMany(models.Group, { foreignKey: "groupId" })
  };
  return userGroup;
};