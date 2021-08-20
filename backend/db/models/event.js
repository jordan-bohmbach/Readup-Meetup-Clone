'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    Event.belongsTo(models.Group, {foreignKey: "categoryId"})
    Event.belongsTo(models.User, {foreignKey: "hostId"})

    const rsvpColumnMapping = {
      through: models.Rsvp,
      foreignKey: "eventId",
      otherKey: "userId",
    }
    Event.belongsToMany(models.User, rsvpColumnMapping)
    Event.hasMany(models.Rsvp, {foreignKey: "eventId", onDelete: 'CASCADE', hooks: true})

    Event.belongsTo(models.Venue, { foreignKey: "venueId" })
  };
  return Event;
};