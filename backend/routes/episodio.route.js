const express = require("express");
const router = express.Router();

//definir o controlador desta rota
const episodioController = require("../controller/episodio.controller");

//definir os endpoints slayyye
router.get("/episodios", episodioController.getAllEpisodios);
router.get("/episodio/:id", episodioController.getEpisodioById);
router.get("/episodios/ferida/:id", episodioController.getEpisodioByFerida);
router.post("/episodio", episodioController.createEpisodio);
//em falta; rota para retornar o episodio pelo nome
router.put("/episodio/:id", episodioController.updateEpisodio);
router.delete("/episodio/:id", episodioController.deleteEpisodio);

module.exports = router;