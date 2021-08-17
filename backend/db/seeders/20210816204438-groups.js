'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Groups', [
        {
        type: 'Science Fiction',
        image: 'https://cdn.britannica.com/09/92009-050-122EC720/Enterprise-from-Star-Trek-III-The-Search.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Programming',
        image: 'https://images-na.ssl-images-amazon.com/images/I/519YsN69yEL._SX379_BO1,204,203,200_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Non-fiction',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41DgeZxPqbS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Groups', null, {});
  }
};
