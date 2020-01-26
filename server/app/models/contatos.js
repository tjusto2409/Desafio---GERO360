'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contatos = sequelize.define('Contatos', {
    nome: DataTypes.STRING,
    dtNascimento: DataTypes.DATEONLY,
    celular: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Contatos.associate = function(models) {
    // associations can be defined here
  };
  return Contatos;
};