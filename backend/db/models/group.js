'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    type: DataTypes.STRING
  }, {});
  Group.associate = function(models) {
    Group.hasMany(models.Event, { foreignKey: "categoryId" })

    const userGroupsColumnMapping = {
      through: "userGroups",
      foreignKey: "groupId",
      otherKey: "userId"
    }
    Group.belongsToMany(models.User, userGroupsColumnMapping)
  };
  return Group;
};