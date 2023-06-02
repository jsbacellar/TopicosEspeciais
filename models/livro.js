'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Livro.belongsTo(models.Usuario, {foreignKey: {name: 'usuarioId', allowNull: false },})
      Livro.belongsTo(models.Autor, {foreignKey: {name: 'autorId', allowNull: false },})
      Livro.belongsTo(models.Editora, {foreignKey: {name: 'editoraId', allowNull: false },})
      Livro.hasMany(models.Resenha, { foreignKey: 'livroId'})
      Livro.hasMany(models.Emprestimo, { foreignKey: 'livroId'})
    };
  }
  Livro.init({
    
    titulo: DataTypes.STRING,
    anoPub: DataTypes.INTEGER,
    isbn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livro',
  });
  return Livro;
};