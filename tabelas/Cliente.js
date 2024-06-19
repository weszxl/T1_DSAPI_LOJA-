const { DataTypes } = require('sequelize');
const sequelize = require('../configure/banco');
const Cidade = require('./Cidade');

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  altura: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  nascim: {
    type: DataTypes.DATE,
    allowNull: true
  },
  cidade_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cidade,
      key: 'id'
    }
  }
}, {
  tableName: 'clientes',
  timestamps: false
});

module.exports = Cliente;




