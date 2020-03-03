'use strict';
const data = require('../seedData/testData');

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Blogs', data.blogs);
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Blogs', null, {});
  }
};
