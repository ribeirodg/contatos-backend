'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable(
      'usuarios',
      {
        id:{type: Sequelize.DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
        nome: {type: Sequelize.DataTypes.STRING(45), allowNull:false},
        email: {type: Sequelize.DataTypes.STRING(45), allowNull:false},
        senha:Sequelize.DataTypes.STRING(256)
      },
      'contatos',
             {
               id:{type: Sequelize.DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
               nome: {type: Sequelize.DataTypes.STRING(45), allowNull:false},
               email: {type: Sequelize.DataTypes.STRING(45), allowNull:false},
               senha:Sequelize.DataTypes.STRING(256)
             }

         )

         
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
