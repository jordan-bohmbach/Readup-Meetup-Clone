'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [{
        name: 'Jordans House1',
        address: '110 S Birchwood Dr1',
        city: 'Naperville',
        state: 'Illinois',
        zipCode: '60517',
        lat: 10101,
        lng: 23232,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
          name: 'Jordans House2',
          address: '110 S Birchwood Dr2',
          city: 'Naperville',
          state: 'Illinois',
          zipCode: '60517',
          lat: 10101,
          lng: 23232,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jordans House3',
          address: '110 S Birchwood Dr3',
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
