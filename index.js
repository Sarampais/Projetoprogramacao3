const express = require("express");
const app = express(); //definir a nossa app em EXPRESS

//definir o EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.set("port", process.env.port || process.env.PORT || 5200);
app.use(express.urlencoded({ extended: true })); //permitir pedidos do exterior

const routes = require("./routes/main.route");
app.use("/", routes);
app.use("/", require("./routes/ferida.route"));
app.use("/", require("./routes/episodio.route"));
app.use("/", require("./routes/enfermeiro.route"));
app.use("/", require("./routes/medico.route"));
app.use("/", require("./routes/utente.route"));

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado na porta: " + app.get("port"));
});
