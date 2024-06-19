const sequelize = require('../configure/banco');
const Cidade = require('./Cidade');
const Cliente = require('./Cliente');
const Categoria = require('./Categoria');
const Produto = require('./Produto');
const Pedido = require('./Pedido');
const PedidoProduto = require('./PedidoProduto');

Cidade.hasMany(Cliente, { foreignKey: 'cidade_id' });
Cliente.belongsTo(Cidade, { foreignKey: 'cidade_id' });

Categoria.hasMany(Produto, { foreignKey: 'categoria_id' });
Produto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

Pedido.belongsToMany(Produto, { through: PedidoProduto, foreignKey: 'pedido_id' });
Produto.belongsToMany(Pedido, { through: PedidoProduto, foreignKey: 'produto_id' });

module.exports = {
  sequelize,
  Cidade,
  Cliente,
  Categoria,
  Produto,
  Pedido,
  PedidoProduto
};
