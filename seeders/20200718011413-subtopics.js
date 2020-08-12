'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SubTopics', [
      {
        name: 'Commonly confused',
        desc: 'Never mix up these commonly confused words again',
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 1
      },
      {
        name: 'High School smarts',
        desc: 'Words encountered in college prep exams',
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 1
      },
      {
        name: 'Sounding smart',
        desc: 'Help your friends get acquanited with their dictionaries',
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 1
      },
      {
        name: 'Terms',
        desc: 'These terms are essential in your study of geometry',
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        name: 'Theorems',
        desc: 'Memorize these geometry theorems to conquer any problem',
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 2
      },
      {
        name: 'Common commands',
        desc: "You'll use these core Git commands every day",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        name: 'History manipulation',
        desc: "Everything you've ever wanted to know about manipulating Git history",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      },
      {
        name: 'Advanced commands',
        desc: "Impress your friends with these advanced Git commands",
        createdAt: new Date(),
        updatedAt: new Date(),
        TopicId: 3
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SubTopics', null, {});
  }
};
