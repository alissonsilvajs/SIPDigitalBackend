module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      price: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      image: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable('product'),
};
