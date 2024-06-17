const sequelize = require("sequelize");
const conexao = new sequelize("projetopratico", "root", "123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

module.exports = conexao;
