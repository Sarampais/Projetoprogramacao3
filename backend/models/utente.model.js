const sequalize = require("sequelize");
const db = require("../config/database");

let Utente = db.define(
  "utente",
  {
    n_de_utente: {
      type: sequalize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    nome: sequalize.STRING,
    nif: sequalize.INTEGER,
    n_seguranca_social: sequalize.INTEGER,
  },
  {
    timestamp: true,
    tableName: "utente",
  }
);

module.exports = Utente;