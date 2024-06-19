/*banco para teste*/
CREATE DATABASE LOJA_DSENV_API;
USE LOJA_DSENV_API;

SHOW TABLES;

INSERT INTO cidades (nome) VALUES 
('Porto Alegre'), 
('Caxias do Sul'), 
('São Francisco Vestseilaoque');

INSERT INTO categorias (nome) VALUES 
('Bebidas'), 
('Charutos'), 
('Roupas');

INSERT INTO clientes (nome, altura, nascim, cidade_id) VALUES 
('He-man', 1.80, '1990-05-15', 1), 
('Dora Exploradora', 1.65, '2004-11-23', 2);

INSERT INTO produtos (nome, preco, quantidade, categoria_id) VALUES 
('Jack Daniels', 250.00, 10, 1), 
('Cubano', 130.00, 20, 1), 
('Calça Jeans', 50.00, 100, 2);

INSERT INTO pedidos_produtos (pedido_id, produto_id, preco, quantidade) VALUES 
(1, 1, 250.00, 5), 
(1, 2, 130.00, 5), 
(2, 3, 50.00, 5);

INSERT INTO Admins (username, password, isAdmin)
VALUES ('admin', '$2a$10$CwTycUXWue0Thq9StjUM0uZ0.3E2U0Lg6B1grYzPPL9CwGkQVP2m6', true);

