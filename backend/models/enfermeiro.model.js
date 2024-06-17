const sequalize = require("sequelize");
const db = require("../config/database");

let Enfermeiro = db.define(
  "enfermeiro",
  {
    numero_mecan: {
      type: sequalize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    nome: sequalize.STRING,
    servico: sequalize.STRING,
  },
  {
    timestamp: true,
    tableName: "enfermeiro",
  }
);

module.exports = Enfermeiro;