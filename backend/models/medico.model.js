const sequelize = require("sequelize");
const db = require("../config/database");

let Medico = db.define(
  "medico",
  {
    n_mecan: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    nome: sequelize.STRING,
    ct_profissional: sequelize.STRING,
    especialidade: sequelize.STRING,
  },
  {
    timestamp: true,
    tableName: "medico",
  }
);

module.exports = Medico;