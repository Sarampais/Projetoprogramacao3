const sequalize = require("sequelize");
const db = require("../config/database");

let Ferida = db.define(
  "ferida",
  {
    id_ferida: {
      type: sequalize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tpo_cicratizacao: sequalize.STRING,
    area: sequalize.INTEGER,
    largura: sequalize.INTEGER,
    comprimento: sequalize.INTEGER,
    inflamacao: sequalize.STRING,
    qualidade: sequalize.STRING,
    odor: sequalize.STRING,
    cor: sequalize.STRING,
  },
  {
    timestamp: true,
    tableName: "ferida",
  }
);

module.exports = Ferida;