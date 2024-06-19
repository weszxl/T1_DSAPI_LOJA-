const express = require('express');
const router = express.Router();
const Usuario = require('../tabelas/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = 'chave_teste';

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Usuario.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao autenticar usuário', error });
  }
});

// (admin)
router.post('/register', async (req, res) => {
    const { username, password, isAdmin } = req.body;
  
    try {
      const user = await Usuario.create({ username, password, isAdmin });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao registrar usuário', error });
    }
  });
  

module.exports = router;

