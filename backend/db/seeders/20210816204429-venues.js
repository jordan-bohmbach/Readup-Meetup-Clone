'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [{
        name: 'Jordans House',
        address: '110 S Birchwood Dr',
        city: 'Naperville',
        state: 'Illinois',
        zipCode: '60517',
        lat: 10101,
        lng: 23232,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Venues', null, {});
  }
};
