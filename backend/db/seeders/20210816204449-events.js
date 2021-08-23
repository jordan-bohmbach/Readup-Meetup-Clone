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
        hostId: 2,
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
      },
      {
        hostId: 1,
        venueId: 1,
        categoryId: 7,
        name: 'Steven King Saturday Book Club',
        date: new Date(),
        capacity: 15,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41h8tLeMLcL._SX322_BO1,204,203,200_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        hostId: 2,
        venueId: 1,
        categoryId: 1,
        name: 'Blade runner book signing',
        date: new Date(),
        capacity: 15,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51z2gfebQDL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 7,
          name: 'Sunday night spooky short stories',
          date: new Date(),
          capacity: 15,
          image: 'https://images-na.ssl-images-amazon.com/images/I/51xcUEzbz7L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 3,
          name: 'When entrepreneurship goes too far',
          date: new Date(),
          capacity: 15,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41r-oFRk-GL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 1,
          name: 'Spacetravel reading groups on wednesday',
          date: new Date(),
          capacity: 15,
          image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJ_RppgcsaJjh9-x6YK4bYr17CGvHbG9GKrn_s1HZb0zr6T9tH',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 3,
          name: 'Non-fiction science fiction',
          date: new Date(),
          capacity: 15,
          image: 'https://m.media-amazon.com/images/I/61ya3dTAV6L._SL500_.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 1,
          name: 'The fear saga bookclub',
          date: new Date(),
          capacity: 15,
          image: 'https://m.media-amazon.com/images/I/51PXBzWVrxL._SY346_.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 4,
          name: 'Investing lessons from history',
          date: new Date(),
          capacity: 15,
          image: 'https://images-na.ssl-images-amazon.com/images/I/413qkKEwKQL._SX330_BO1,204,203,200_.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 3,
          name: 'Learning about fusion technology',
          date: new Date(),
          capacity: 15,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41Gv+m5AJ0L._SY344_BO1,204,203,200_.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2,
          venueId: 1,
          categoryId: 1,
          name: 'Dune reading group',
          date: new Date(),
          capacity: 15,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41yAdpcoZkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Events', null, {});
  }
};
