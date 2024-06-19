const { DataTypes } = require('sequelize');
const sequelize = require('../configure/banco');
const Categoria = require('./Categoria');

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'id'
    }
  }
}, {
  tableName: 'produtos',
  timestamps: false
});

module.exports = Produto;

