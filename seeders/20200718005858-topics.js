'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Topics', [
        {
          name: 'Vocabulary',
          desc: 'Build your vocabulary with these power words',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Geometry',
          desc: 'Ace your geometry exams with these memory hacks',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Git',
          desc: 'Become a Git expert by learning all the commands',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Topics', null, {});
  }
};
