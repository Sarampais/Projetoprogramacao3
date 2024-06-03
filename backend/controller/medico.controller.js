const Medico = require("../models/medico.model.js");
const Utente = require("../models/utente.model.js");
const Ferida = require("../models/ferida.model.js");
const sequalize = require("../config/database");

const defineAssociations = require("../models/associations.js");
defineAssociations();

const controllers = {};
sequalize.sync();

//ORM (find, all, delete, uptade) (seta para cima) SYNC() create table <name>  -----------

controllers.getAllMedicos = async (req, res) => {
  const dados = await Medico.findAll({
    include: [
      { model: Utente },
      { model: Ferida }
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

controllers.getMedicoById = async (req, res) => {
  const { id } = req.params;
  const dados = await Medico.findAll({
      where: { n_mecan: id },
      include: [
        { model: Utente },
        { model: Ferida }
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

controllers.createMedico = async (req, res) => {
  const { n_mecan, nome, ct_profissional, especialidade } = req.body;
  const dados = await Medico.create({
    n_mecan: n_mecan,
    nome: nome,
    ct_profissional: ct_profissional,
    especialidade: especialidade,
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

controllers.updateMedico = async (req, res) => {
  const { id } = req.params;
  const { nome, ct_profissional, especialidade } = req.body;

  const dados = await Medico.update(
    {
      nome: nome,
      ct_profissional: ct_profissional,
      especialidade: especialidade,
    },
    { where: { n_mecan: id } }
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

controllers.deleteMedico = async (req, res) => {
  const { id } = req.params;
  const dados = await Medico.destroy({ where: { n_mecan: id } })
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