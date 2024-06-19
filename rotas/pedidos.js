const express = require('express');
const router = express.Router();
const pedidoController = require('../controladores/pedidoControl');

/*
router.post('/', async (req, res) => {
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
    res.status(201).send(`Pedido confirmado!`);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao realizar pedido', error });
  }
});

router.get('/', async (req, res) => {
    try {
      const pedidos = await Pedido.findAll();
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar pedidos', error });
    }
  });  
*/

router.get('/', pedidoController.getAllPedidos);
router.post('/', pedidoController.createPedido);
router.put('/:id', pedidoController.updatePedido);
router.delete('/:id', pedidoController.deletePedido);

module.exports = router;


