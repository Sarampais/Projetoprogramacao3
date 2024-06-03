const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const utenteController = require("../controller/utente.controller");

//definir os endpoints 
router.get("/utentes", utenteController.getAllUtentes);
router.get("/utente/:id", utenteController.getUtenteById);
router.post("utentes", utenteController.createUtente);
//em falta; rota para retornar o utente pelo nome
router.put("utentes/:id", utenteController.updateUtente);
router.delete("utentes/:id", utenteController.deleteUtente);

module.exports = router;