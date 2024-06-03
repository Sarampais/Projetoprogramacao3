const Enfermeiro = require("../models/enfermeiro.model.js");
const Episodio = require("../models/episodio.model.js");
const sequalize = require("../config/database");

const defineAssociations = require("../models/associations.js");
defineAssociations();

const controllers = {};
sequalize.sync();

//ORM (find, all, delete, uptade) (seta para cima) SYNC() create table <name>  -----------

controllers.getAllEnfermeiros = async (req, res) => {
  const dados = await Enfermeiro.findAll({
      include: [Episodio]
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

controllers.getEnfermeiroById = async (req, res) => {
  const { id } = req.params;
  const dados = await Enfermeiro.findAll({ 
      where: { numero_mecan: id },
      include: [Episodio]
    })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro ao executar a operação" || error.message,
      });
    });
  res.status(200).json({
    data: dados,
    success: true,
  });
};

controllers.getEnfermeiroByService = async (req, res) => {
  const { servico } = req.params;
  const dados = await Enfermeiro.findAll({ 
      where: { servico: servico },
      include: [Episodio]
    })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro ao executar a operação" || error.message,
      });
    });
  res.status(200).json({
    data: dados,
    success: true,
  });
};

controllers.createEnfermeiro = async (req, res) => {
  const { numero_mecan, nome, servico } = req.body;
  const dados = await Enfermeiro.create({
    numero_mecan: numero_mecan,
    nome: nome,
    servico: servico
  })
    .then((resultado) => {
      return resultado;
    })

    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro ao executar a operação." || error.message,
      });
    });

  res.status(201).json({ data: dados, success: true });
};

controllers.updateEnfermeiro = async (req, res) => {
  const { id } = req.params;
  const { nome, servico } = req.body;

  const dados = await Enfermeiro.update(
    {
      nome: nome,
      servico: servico
    },
    { where: { numero_mecan: id } }
  )
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro ao executar a operação ." || error.message,
      });
    });

  res.status(200).json({ data: dados, success: true });
};

controllers.deleteEnfermeiro = async (req, res) => {
  const { id } = req.params;
  const dados = await Enfermeiro.destroy({ where: { numero_mecan: id } })
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