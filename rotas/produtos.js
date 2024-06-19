const express = require('express');
const router = express.Router();
const Produto = require('../tabelas/Produto');
const { authMiddleware, adminMiddleware } = require('../middleware/verificar');

router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error });
  }
});

// (somente admin)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  const { nome, preco, quantidade, categoria_id } = req.body;
  try {
    const produto = await Produto.create({ nome, preco, quantidade, categoria_id });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
});

// (somente admin)
router.put('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;
  const { nome, preco, quantidade, categoria_id } = req.body;
  try {
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    produto.nome = nome;
    produto.preco = preco;
    produto.quantidade = quantidade;
    produto.categoria_id = categoria_id;
    await produto.save();
    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
});

// (somente admin)
router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    await produto.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir produto', error });
  }
});

module.exports = router;
