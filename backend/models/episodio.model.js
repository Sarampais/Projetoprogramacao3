const sequalize = require("sequelize");
const db = require("../config/database");

let Episodio = db.define(
  "episodio",
  {
    n_de_episodio: {
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
    observacoes: sequalize.STRING,
    data: sequalize.DATE,
  },
  {
    timestamp: true,
    tableName: "episodio",
  }
);

module.exports = Episodio;