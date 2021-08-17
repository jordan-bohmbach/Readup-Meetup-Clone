'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
        {
        hostId: 1,
        venueId: 1,
        categoryId: 1,
        name: 'Azimov reading group',
        date: new Date(),
        capacity: 15,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51XTVnqRqtL._SX342_SY445_QL70_ML2_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        venueId: 1,
        categoryId: 1,
        name: 'Arthur C Clarke',
        date: new Date(),
        capacity: 15,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Expedition_to_earth.jpg/200px-Expedition_to_earth.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 1,
        venueId: 1,
        categoryId: 1,
        name: 'H. G. Wells',
        date: new Date(),
        capacity: 15,
        image: 'https://images-na.ssl-images-amazon.com/images/I/513TtvjPN-L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Events', null, {});
  }
};
