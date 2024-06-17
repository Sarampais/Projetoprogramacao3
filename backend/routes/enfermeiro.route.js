const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const enfermeiroController = require("../controller/enfermeiro.controller");

//definir os endpoints slayyye
router.get("/enfermeiros", enfermeiroController.getAllEnfermeiros);
router.get("/enfermeiro/:id", enfermeiroController.getEnfermeiroById);
router.get("/enfermeiros/:servico", enfermeiroController.getEnfermeiroByService);
router.post("/enfermeiro", enfermeiroController.createEnfermeiro);
//em falta; rota para retornar o enfermeiro pelo nome
router.put("/enfermeiro/:id", enfermeiroController.updateEnfermeiro);
router.delete("/enfermeiro/:id", enfermeiroController.deleteEnfermeiro);

module.exports = router;