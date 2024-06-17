const Utente = require("../models/utente.model.js");
const Medico = require('../models/medico.model');
const Ferida = require("../models/ferida.model.js");
const sequalize = require("../config/database");

const defineAssociations = require("../models/associations.js");
defineAssociations();

const controllers = {};
sequalize.sync();

//ORM (find, all, delete, uptade) (seta para cima) SYNC() create table <name>  -----------

controllers.getAllUtentes = async (req, res) => {
    const dados = await Utente.findAll({
      include: [
        { model: Medico },
        { model: Ferida }
      ],
    })
    .then((resultado) => {
      return resultado;
    })

    .catch((error) => {
      res.status(500).send({
        message: "Ocurreu um erro na execução da operação." || error.message,
      });
    });

  res.status(200).json({
    data: dados,
    success: true,
  });
};

controllers.getUtenteById = async (req, res) => {
  const { id } = req.params;
  const dados = await Utente.findAll({
      where: { n_de_utente: id },
      include: [
        { model: Medico },
        { model: Ferida }
      ]
    })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocurreu um erro ao executar a operação" || error.message,
      });
    });
  res.status(200).json({
    data: dados,
    success: true,
  });
};

controllers.createUtente = async (req, res) => {
  const { n_de_utente, nome, nif, n_seguranca_social } = req.body;
  const dados = await Utente.create({
    n_de_utente: n_de_utente,
    nome: nome,
    nif: nif,
    n_seguranca_social: n_seguranca_social,
  })
    .then((resultado) => {
      return resultado;
    })

    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocurreu um erro ao executar a operação." || error.message,
      });
    });

  res.status(201).json({ data: dados, success: true });
};

controllers.updateUtente = async (req, res) => {
  const { id } = req.params;
  const { nome, nif, n_seguranca_social } = req.body;

  const dados = await Utente.update(
      {
        nome: nome,
        nif: nif,
        n_seguranca_social: n_seguranca_social,
      },
      { where: { n_de_utente: id } }
    )
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocurreu um erro ao executar a operação ." || error.message,
      });
    });

  res.status(200).json({ data: dados, success: true });
};

controllers.deleteUtente = async (req, res) => {
  const { id } = req.params;
  const dados = await Utente.destroy({ where: { n_de_utente: id } })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro ao executar a operação." || error.message,
      });
    });

  res.status(204).json({ data: dados, success: true });
};

module.exports = controllers;