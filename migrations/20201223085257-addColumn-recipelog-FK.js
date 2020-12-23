'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('recipeLogs', 'userId');
    await queryInterface.addColumn('recipeLogs', 'userId', {
      allowNull: true,
      type: Sequelize.INTEGER,
      onUpdate: 'cascade',
      onDelete: 'cascade',
      references: {
        model: 'users',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('recipeLogs', 'userId');
  }
};
