const sequelize = require("sequelize");
const conexao = new sequelize("projetopratico", "root", "", {
  host: "localhost",
  port: 3308,
  dialect: "mysql",
});

module.exports = conexao;
