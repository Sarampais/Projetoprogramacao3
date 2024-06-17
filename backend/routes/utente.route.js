const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const utenteController = require("../controller/utente.controller");

//definir os endpoints slayyye
router.get("/utentes", utenteController.getAllUtentes);
router.get("/utente/:id", utenteController.getUtenteById);
router.post("/utente", utenteController.createUtente);
//em falta; rota para retornar o utente pelo nome
router.put("/utente/:id", utenteController.updateUtente);
router.delete("/utente/:id", utenteController.deleteUtente);

module.exports = router;