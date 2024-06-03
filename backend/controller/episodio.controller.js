const Episodio = require("../models/episodio.model.js");
const Ferida = require("../models/ferida.model.js");
const Enfermeiro = require("../models/enfermeiro.model.js");
const sequalize = require("../config/database");

const defineAssociations = require("../models/associations.js");
defineAssociations();

const controllers = {};
sequalize.sync();

//ORM (find, all, delete, uptade) (seta para cima) SYNC() create table <name>  -----------

controllers.getAllEpisodios = async (req, res) => {
  const dados = await Episodio.findAll({
      include: [
        { model: Ferida },
        { model: Enfermeiro }
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

controllers.getEpisodioById = async (req, res) => {
  const { id } = req.params;
  const dados = await Episodio.findAll({ 
      where: { n_de_episodio: id },
      include: [
        { model: Ferida },
        { model: Enfermeiro }
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

controllers.getEpisodioByFerida = async (req, res) => {
  const { id } = req.params;
  const dados = await Episodio.findAll({ 
      where: { id_ferida: id },
      include: [
        { model: Ferida },
        { model: Enfermeiro }
      ]
    })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro na execução da operação" || error.message,
      });
    });
  res.status(200).json({
    data: dados,
    success: true,
  });
};

controllers.createEpisodio = async (req, res) => {
  const { n_de_episodio, tpo_cicratizacao, area, largura, comprimento, inflamacao, qualidade, odor, cor, observacoes, data, id_ferida, numero_mecan } = req.body;
  const dados = await Episodio.create({
    tpo_cicratizacao: tpo_cicratizacao,
    area: area,
    largura: largura,
    comprimento: comprimento,
    inflamacao: inflamacao,
    qualidade: qualidade,
    odor: odor,
    cor: cor,
    observacoes: observacoes,
    data: data,
    id_ferida: id_ferida,
    numero_mecan: numero_mecan
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

controllers.updateEpisodio = async (req, res) => {
  const { id } = req.params;
  const { tpo_cicratizacao, area, largura, comprimento, inflamacao, qualidade, odor, cor, observacoes, data, id_ferida, numero_mecan } = req.body;

  const dados = await Episodio.update(
    {
      tpo_cicratizacao: tpo_cicratizacao,
      area: area,
      largura: largura,
      comprimento: comprimento,
      inflamacao: inflamacao,
      qualidade: qualidade,
      odor: odor,
      cor: cor,
      observacoes: observacoes,
      data: data,
      id_ferida: id_ferida,
      numero_mecan: numero_mecan
    },
    { where: { n_de_episodio: id } }
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

controllers.deleteEpisodio = async (req, res) => {
  const { id } = req.params;
  const dados = await Episodio.destroy({ where: { n_de_episodio: id } })
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: "Ocorreu um erro na execução da operação" || error.message,
      });
    });

  res.status(204).json({ data: dados, success: true });
};

module.exports = controllers;