const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const medicoController = require("../controller/medico.controller");

//definir os endpoints slayyye
router.get("/medicos", medicoController.getAllMedicos);
router.get("/medico/:id", medicoController.getMedicoById);
router.post("/medico", medicoController.createMedico);
//em falta; rota para retornar o medico pelo nome
router.put("/medico/:id", medicoController.updateMedico);
router.delete("/medico/:id", medicoController.deleteMedico);

module.exports = router;