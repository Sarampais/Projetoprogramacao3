const Ferida = require("../models/ferida.model.js");
const Utente = require("../models/utente.model.js");
const Medico = require("../models/medico.model.js");
const Episodio = require("../models/episodio.model.js");
const sequalize = require("../config/database");

const defineAssociations = require("../models/associations.js");
defineAssociations();

const controllers = {};
sequalize.sync();

//ORM (find, all, delete, uptade) (seta para cima) SYNC() create table <name>  -----------

controllers.getAllFeridas = async (req, res) => {
  const dados = await Ferida.findAll({
      include: [
        { model: Utente },
        { model: Medico },
        { model: Episodio }
      ],
    })
    .then((resultado) => {
      return resultado;
    })

    .catch((error) => {
      res.status(500).send({
        message: "Ocorreu um erro na execução da operação." || error.message,
      });
    });

  res.status(200).json({
    data: dados,
    success: true,
  });
};

controllers.getFeridaById = async (req, res) => {
  const { id } = req.params;
  const dados = await Ferida.findAll({ 
      where: { id_ferida: id },
      include: [
        { model: Utente },
        { model: Medico },
        { model: Episodio }
      ]
    })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro na execução da operação." || error.message,
      });
    });
  res.status(200).json({
    data: dados,
    success: true,
  });
};

controllers.createFerida = async (req, res) => {
  const { id_ferida, tpo_cicratizacao, area, largura, comprimento, inflamacao, qualidade, odor, cor, n_de_utente, n_mecan } = req.body;
  const dados = await Ferida.create({
    tpo_cicratizacao: tpo_cicratizacao,
    area: area,
    largura: largura,
    comprimento: comprimento,
    inflamacao: inflamacao,
    qualidade: qualidade,
    odor: odor,
    cor: cor,
    n_de_utente: n_de_utente,
    n_mecan: n_mecan
  })
    .then((resultado) => {
      return resultado;
    })

    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro na execução da operação." || error.message,
      });
    });

  res.status(201).json({ data: dados, success: true });
};

controllers.updateFerida = async (req, res) => {
  const { id } = req.params;
  const { tpo_cicratizacao, area, largura, comprimento, inflamacao, qualidade, odor, cor, n_de_utente, n_mecan } = req.body;

  const dados = await Ferida.update(
    {
      tpo_cicratizacao: tpo_cicratizacao,
      area: area,
      largura: largura,
      comprimento: comprimento,
      inflamacao: inflamacao,
      qualidade: qualidade,
      odor: odor,
      cor: cor,
      n_de_utente: n_de_utente,
      n_mecan: n_mecan
    },
    { where: { id_ferida: id } }
  )
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro na execução da operação." || error.message,
      });
    });

  res.status(200).json({ data: dados, success: true });
};

controllers.deleteFerida = async (req, res) => {
  const { id } = req.params;
  const dados = await Ferida.destroy({ where: { id_ferida: id } })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro na execução da operação." || error.message,
      });
    });

  res.status(204).json({ data: dados, success: true });
};

module.exports = controllers;