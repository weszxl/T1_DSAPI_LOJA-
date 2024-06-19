const jwt = require('jsonwebtoken');

const JWT_SECRET = 'chave_teste';

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido', error });
  }
}

function adminMiddleware(req, res, next) {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Acesso negado' });
  }

  next();
}

module.exports = {
  authMiddleware,
  adminMiddleware
};

