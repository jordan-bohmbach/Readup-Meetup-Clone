'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.Group, {foreignKey: "categoryId"})

    const rsvpColumnMapping = {
      through: "rsvps",
      foreignKey: "eventId",
      otherKey: "userId"
    }
    Event.belongsToMany(models.User, rsvpColumnMapping)

    Event.belongsTo(models.Venue, { foreignKey: "venueId" })
  };
  return Event;
};