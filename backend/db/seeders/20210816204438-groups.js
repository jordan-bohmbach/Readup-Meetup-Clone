'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Groups', [{
        type: 'Science Fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Groups', null, {});
  }
};
