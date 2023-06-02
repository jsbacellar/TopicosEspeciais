'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Editora.hasMany(models.Livro, { foreignKey: 'editoraId'})
    }
  }
  Editora.init({
    
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Editora',
  });
  return Editora;
};