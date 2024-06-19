const { DataTypes } = require('sequelize');
const sequelize = require('../configure/banco');
const Cliente = require('./Cliente');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  horario: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  endereco: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  }
}, {
  tableName: 'pedidos',
  timestamps: false
});

module.exports = Pedido;
