const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const enfermeiroController = require("../controller/enfermeiro.controller");

//definir os endpoints 
router.get("/enfermeiros", enfermeiroController.getAllEnfermeiros);
router.get("/enfermeiro/:id", enfermeiroController.getEnfermeiroById);
router.get("/enfermeiros/:servico", enfermeiroController.getEnfermeiroByService);
router.post("enfermeiros", enfermeiroController.createEnfermeiro);
//em falta; rota para retornar o enfermeiro pelo nome
router.put("enfermeiros/:id", enfermeiroController.updateEnfermeiro);
router.delete("enfermeiros/:id", enfermeiroController.deleteEnfermeiro);

module.exports = router;