'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emprestimo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Emprestimo.belongsTo(models.Usuario, {foreignKey: {name: 'usuarioId', allowNull: false },})
      Emprestimo.belongsTo(models.Livro, {foreignKey: {name: 'livroId', allowNull: false },})
    }
  }
  Emprestimo.init({
    
    data: DataTypes.DATE,
    dataDevolucao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Emprestimo',
  });
  return Emprestimo;
};