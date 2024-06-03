const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const episodioController = require("../controller/episodio.controller");

//definir os endpoints 
router.get("/episodios", episodioController.getAllEpisodios);
router.get("/episodio/:id", episodioController.getEpisodioById);
router.get("/episodios/ferida/:id", episodioController.getEpisodioByFerida);
router.post("episodios", episodioController.createEpisodio);
//em falta; rota para retornar o episodio pelo nome
router.put("episodios/:id", episodioController.updateEpisodio);
router.delete("episodios/:id", episodioController.deleteEpisodio);

module.exports = router;