const { Sequelize } = require('sequelize');

// Mudar "LOJA_DSENV_API", "usuario" e "senha" de acordo com a conexão do seu banco
const sequelize = new Sequelize('LOJA_DSENV_API', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
