const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const feridaController = require("../controller/ferida.controller");

//definir os endpoints
router.get("/feridas", feridaController.getAllFeridas);
router.get("/ferida/:id", feridaController.getFeridaById);
router.post("feridas", feridaController.createFerida);
//em falta; rota para retornar o ferida pelo nome
router.put("feridas/:id", feridaController.updateFerida);
router.delete("feridas/:id", feridaController.deleteFerida);

module.exports = router;