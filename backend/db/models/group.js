'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    type: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Group.associate = function(models) {
    Group.hasMany(models.Event, { foreignKey: "categoryId", onDelete: 'CASCADE', hooks: true })
    Group.belongsTo(models.User, { foreignKey: "ownerId" })

    const userGroupsColumnMapping = {
      through: models.userGroup,
      foreignKey: "groupId",
      otherKey: "userId"
    }
    Group.belongsToMany(models.User, userGroupsColumnMapping)
    Group.hasMany(models.userGroup, {foreignKey: "groupId", onDelete: 'CASCADE, hooks: true'})

    Group.belongsTo(models.User, { foreignKey: "ownerId" })
  };
  return Group;
};