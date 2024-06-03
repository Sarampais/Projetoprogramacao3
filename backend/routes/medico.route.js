const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const medicoController = require("../controller/medico.controller");

//definir os endpoints
router.get("/medicos", medicoController.getAllMedicos);
router.get("/medico/:id", medicoController.getMedicoById);
router.post("medicos", medicoController.createMedico);
//em falta; rota para retornar o medico pelo nome
router.put("medicos/:id", medicoController.updateMedico);
router.delete("medicos/:id", medicoController.deleteMedico);

module.exports = router;