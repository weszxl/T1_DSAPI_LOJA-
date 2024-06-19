const Produto = require('../tabelas/Produto');

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao procurar por produtos', error });
  }
};

exports.createProduto = async (req, res) => {
  try {
    const { nome, preco, quantidade, categoria_id } = req.body;
    const novoProduto = await Produto.create({ nome, preco, quantidade, categoria_id });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

exports.updateProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, preco, quantidade, categoria_id } = req.body;
    const produto = await Produto.findByPk(id);
    if (produto) {
      produto.nome = nome;
      produto.preco = preco;
      produto.quantidade = quantidade;
      produto.categoria_id = categoria_id;
      await produto.save();
      res.status(200).json(produto);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro na atualização produto', error });
  }
};

exports.deleteProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await Produto.findByPk(id);
    if (produto) {
      await produto.destroy();
      res.status(200).json({ message: 'Produto excluído!' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro na exclusão produto', error });
  }
};
