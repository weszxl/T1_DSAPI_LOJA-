const Pedido = require('../tabelas/Pedido');
const PedidoProduto = require('../tabelas/PedidoProduto');
const Produto = require('../tabelas/Produto');

exports.getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({ include: Produto });
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao procurar por pedidos', error });
  }
};

exports.createPedido = async (req, res) => {
  const { cliente_id, endereco, produtos } = req.body;

  try {
    const pedido = await Pedido.create({ cliente_id, endereco });

    for (const produto of produtos) {
      await PedidoProduto.create({
        pedido_id: pedido.id,
        produto_id: produto.produto_id,
        preco: produto.preco,
        quantidade: produto.quantidade
      });
    }

    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido', error });
  }
};

exports.updatePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const { cliente_id, endereco, produtos } = req.body;
    const pedido = await Pedido.findByPk(id);
    if (pedido) {
      pedido.cliente_id = cliente_id;
      pedido.endereco = endereco;
      await pedido.save();

      await PedidoProduto.destroy({ where: { pedido_id: id } });

      for (const produto of produtos) {
        await PedidoProduto.create({
          pedido_id: id,
          produto_id: produto.produto_id,
          preco: produto.preco,
          quantidade: produto.quantidade
        });
      }

      res.status(200).json(pedido);
    } else {
      res.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro na atualização pedido', error });
  }
};

exports.deletePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findByPk(id);
    if (pedido) {
      await PedidoProduto.destroy({ where: { pedido_id: id } });
      await pedido.destroy();
      res.status(200).json({ message: 'Pedido excluído!' });
    } else {
      res.status(404).json({ message: 'Pedido não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro na exclusão do pedido', error });
  }
};
