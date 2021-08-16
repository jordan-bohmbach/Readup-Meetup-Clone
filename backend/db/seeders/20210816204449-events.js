'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [{
        hostId: 1,
        venueId: 1,
        categoryId: 1,
        name: 'Azimov reading group',
        date: new Date(),
        capacity: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Events', null, {});
  }
};
