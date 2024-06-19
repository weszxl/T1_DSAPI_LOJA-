const { DataTypes } = require('sequelize');
const sequelize = require('../configure/banco');
const Pedido = require('./Pedido');
const Produto = require('./Produto');

const PedidoProduto = sequelize.define('PedidoProduto', {
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Pedido,
      key: 'id'
    }
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: Produto,
      key: 'id'
    }
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, {
  tableName: 'pedidos_produtos',
  timestamps: false
});

module.exports = PedidoProduto;
