const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const feridaController = require("../controller/ferida.controller");

//definir os endpoints slayyye
router.get("/feridas", feridaController.getAllFeridas);
router.get("/ferida/:id", feridaController.getFeridaById);
router.post("/ferida", feridaController.createFerida);
//em falta; rota para retornar o ferida pelo nome
router.put("/ferida/:id", feridaController.updateFerida);
router.delete("/ferida/:id", feridaController.deleteFerida);

module.exports = router;