/*
Para registrar usuário admin no insomnia:
{
  "username": "exemplo",
  "password": "exemplo123",
  "isAdmin": true
}

Logar admin:
{
  "username": "teste",
  "password": "teste123"
}
  - Salvar o token retornado(Exemplo: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxODgwNzk4MSwiZXhwIjoxNzE4ODExNTgxfQ.swt5LCcHhoFPc2v_1Rp2XvmGE-eK3S5SC1y-jiCeMMw"),
após salvar, informar o token no campo "value" nos parametros da requisição. 


*/



const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./tabelas');
const produtosRoutes = require('./rotas/produtos');
const pedidosRoutes = require('./rotas/pedidos');
const authRoutes = require('./rotas/authentique');

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use('/produtos', produtosRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/authentique', authRoutes);

app.get('/', (req, res) => {
  res.send('Bem-vindo à loja!');
});

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor ok! http://localhost:${port}`);
    });
  })
  .catch(err => console.log(err));



