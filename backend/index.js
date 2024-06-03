const express = require("express");
const cors = require("cors");
const bodyParser = require("express");
const { json } = require("sequelize");

//app
const app = express();
app.set("port", process.env.port || 5200);
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/main.route"));
app.use("/", require("./routes/utente.route"));
app.use("/", require("./routes/medico.route"));
app.use("/", require("./routes/ferida.route"));
app.use("/", require("./routes/enfermeiro.route"));
app.use("/", require("./routes/episodio.route"));

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado ba porta : " + app.get("port"));
});
