'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rsvp = sequelize.define('Rsvp', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Rsvp.associate = function(models) {
    Rsvp.belongsTo(models.Event, { foreignKey: "eventId" })
  };
  return Rsvp;
};