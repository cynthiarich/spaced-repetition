'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ItemResps', [
      {
        respStem: 'accepts',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 1
      },
      {
        respStem: 'excepts',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 1
      },
      {
        respStem: 'accept',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 2
      },
      {
        respStem: 'except',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 2
      },
      {
        respStem: 'affects',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 3
      },
      {
        respStem: 'effects',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 3
      },
      {
        respStem: 'affect',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 4
      },
      {
        respStem: 'effect',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 4
      },
      {
        respStem: 'affect',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 5
      },
      {
        respStem: 'effect',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 5
      },
      {
        respStem: 'allusion',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 6
      },
      {
        respStem: 'illusion',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 6
      },
      {
        respStem: 'allusion',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 7
      },
      {
        respStem: 'illusion',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 7
      },
      {
        respStem: 'all ready',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 8
      },
      {
        respStem: 'already',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 8
      },
      {
        respStem: 'all ready',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 9
      },
      {
        respStem: 'already',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 9
      },
      {
        respStem: 'capital',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 10
      },
      {
        respStem: 'capitol',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 10
      },
      {
        respStem: 'capital',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 11
      },
      {
        respStem: 'capitol',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 11
      },
      {
        respStem: 'breath',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 12
      },
      {
        respStem: 'breathe',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 12
      },
      {
        respStem: 'breath',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 13
      },
      {
        respStem: 'breathe',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 13
      },
      {
        respStem: 'complements',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 14
      },
      {
        respStem: 'compliments',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 14
      },
      {
        respStem: 'complemented',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 15
      },
      {
        respStem: 'complimented',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 15
      },
      {
        respStem: 'lie',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 16
      },
      {
        respStem: 'lay',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 16
      },
      {
        respStem: 'lie',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 17
      },
      {
        respStem: 'lay',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 17
      },
      {
        respStem: 'than',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 18
      },
      {
        respStem: 'then',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 18
      },
      {
        respStem: 'than',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 19
      },
      {
        respStem: 'then',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 19
      },
      {
        respStem: 'who',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 20
      },
      {
        respStem: 'whom',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 20
      },
      {
        respStem: 'Who',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 21
      },
      {
        respStem: 'Whom',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 21
      },
      {
        respStem: 'point',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 22
      },
      {
        respStem: 'vertex',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 22
      },
      {
        respStem: 'radius',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 22
      },
      {
        respStem: 'arc',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 22
      },
      {
        respStem: 'perpendicular line segment',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 23
      },
      {
        respStem: 'parrallel line segment',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 23
      },
      {
        respStem: 'right triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 23
      },
      {
        respStem: 'vertex',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 23
      },
      {
        respStem: 'equilateral triangle',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 24
      },
      {
        respStem: 'scalene triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 24
      },
      {
        respStem: 'isosceles triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 24
      },
      {
        respStem: 'obtuse triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 24
      },
      {
        respStem: 'equilateral triangle',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 25
      },
      {
        respStem: 'scalene triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 25
      },
      {
        respStem: 'isosceles triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 25
      },
      {
        respStem: 'obtuse triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 25
      },
      {
        respStem: 'equilateral triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 26
      },
      {
        respStem: 'scalene triangle',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 26
      },
      {
        respStem: 'isosceles triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 26
      },
      {
        respStem: 'obtuse triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 26
      },
      {
        respStem: 'equilateral triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 27
      },
      {
        respStem: 'scalene triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 27
      },
      {
        respStem: 'isosceles triangle',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 27
      },
      {
        respStem: 'obtuse triangle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 27
      },
      {
        respStem: 'radius',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 28
      },
      {
        respStem: 'arc',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 28
      },
      {
        respStem: 'diameter',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 28
      },
      {
        respStem: 'chord',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 28
      },
      {
        respStem: 'radius',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 29
      },
      {
        respStem: 'arc',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 29
      },
      {
        respStem: 'diameter',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 29
      },
      {
        respStem: 'chord',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 29
      },
      {
        respStem: 'right angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 30
      },
      {
        respStem: 'acute angle',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 30
      },
      {
        respStem: 'obtuse angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 30
      },
      {
        respStem: 'scalene angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 30
      },
      {
        respStem: 'right angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 31
      },
      {
        respStem: 'acute angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 31
      },
      {
        respStem: 'obtuse angle',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 31
      },
      {
        respStem: 'scalene angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 31
      },
      {
        respStem: 'right angle',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 32
      },
      {
        respStem: 'acute angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 32
      },
      {
        respStem: 'obtuse angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 32
      },
      {
        respStem: 'scalene angle',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 32
      },
      {
        respStem: 'rhombus',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 33
      },
      {
        respStem: 'square',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 33
      },
      {
        respStem: 'trapezoid',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 33
      },
      {
        respStem: 'pentagon',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 33
      },
      {
        respStem: 'Having 4 vertices',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 34
      },
      {
        respStem: 'Having 4 equal sides',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 34
      },
      {
        respStem: 'Having 4 right angles',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 34
      },
      {
        respStem: 'Having 2 pairs of parallel lines',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 34
      },
      {
        respStem: 'git restore',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 35
      },
      {
        respStem: 'git reset --soft',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 35
      },
      {
        respStem: 'git commit --amend',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 35
      },
      {
        respStem: 'git rm',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 35
      },
      {
        respStem: 'staging area',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 36
      },
      {
        respStem: 'working directory',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 36
      },
      {
        respStem: 'commit history',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 36
      },
      {
        respStem: 'reflog',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 36
      },
      {
        respStem: '.gitignore',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 37
      },
      {
        respStem: '.github/ignore',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 37
      },
      {
        respStem: '.gitattributes',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 37
      },
      {
        respStem: '.stash',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 37
      },
      {
        respStem: 'Use git revert to reverse the commit',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 38
      },
      {
        respStem: 'Inspect the diff and manually apply the changes',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 38
      },
      {
        respStem: 'Use git stash to move the changes to another branch',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 38
      },
      {
        respStem: 'Use git rm to remove the commit from history',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 38
      },
      {
        respStem: 'git reset --mixed',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 39
      },
      {
        respStem: 'git reset --soft',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 39
      },
      {
        respStem: 'git reset --hard',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 39
      },
      {
        respStem: 'git reset --staging',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 39
      },
      {
        respStem: 'git pull',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 40
      },
      {
        respStem: 'git fetch',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 40
      },
      {
        respStem: 'git clone',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 40
      },
      {
        respStem: 'git remote',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 40
      },
      {
        respStem: 'A pointer to the most recent commit in a line of work',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 41
      },
      {
        respStem: 'A request to add new content into production',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 41
      },
      {
        respStem: 'A snapshot of the content of the repository at a point in time',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 41
      },
      {
        respStem: 'A full clone of the repository contents',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 41
      },
      {
        respStem: 'git checkout -b',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 42
      },
      {
        respStem: 'git branch --checkout',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 42
      },
      {
        respStem: 'git checkout --new',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 42
      },
      {
        respStem: 'git branch && git checkout',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 42
      },
      {
        respStem: 'The same file contains different changes on two branches that are being merged.',
        correct: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 43
      },
      {
        respStem: 'The same file contains identical changes on two branches being merged.',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 43
      },
      {
        respStem: 'Any time a file is renamed or removed.',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 43
      },
      {
        respStem: 'Any time a file has been modified by two different users.',
        correct: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ItemId: 43
      }

      
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ItemResps', null, {});
  }
};
