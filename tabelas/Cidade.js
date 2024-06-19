const { DataTypes } = require('sequelize');
const sequelize = require('../configure/banco');

const Cidade = sequelize.define('Cidade', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'cidades',
  timestamps: false
});

module.exports = Cidade;
