'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Venues', [{
        name: `John's zoom`,
        address: 'https://us02web.zoom.us/j/88144877401?pwd=eWNRcEU0UFVrMmZMb2tSUStUWFBqZz09#success',
        city: 'n/a',
        state: 'n/a',
        zipCode: 'n/a',
        lat: null,
        lng: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
          name: 'Chicago Public Library',
          address: '400 S State St',
          city: 'Chicago',
          state: 'Illinois',
          zipCode: '60605',
          lat: 10101,
          lng: 23232,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: `Ethan's House`,
          address: '1240 Cambridge Ct',
          city: 'Highland Park',
          state: 'Illinois',
          zipCode: '6035',
          lat: 10133,
          lng: 23245,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: `Ashley's zoom`,
          address: 'https://us02web.zoom.us/j/88144877401?pwd=eWNRcEU0UFVrMmZMb2tSUStUWFBqZz09#success',
          city: 'n/a',
          state: 'n/a',
          zipCode: 'n/a',
          lat: null,
          lng: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: `Seth's zoom`,
          address: 'https://us02web.zoom.us/j/88144877401?pwd=eWNRcEU0UFVrMmZMb2tSUStUWFBqZz09#success',
          city: 'n/a',
          state: 'n/a',
          zipCode: 'n/a',
          lat: null,
          lng: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Venues', null, {});
  }
};
