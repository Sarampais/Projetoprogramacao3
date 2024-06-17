import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/pages/welcome";

import ListarEnfermeiros from "./components/enfermeiros/list";
import CriarEnfermeiro from "./components/enfermeiros/create";
import EditarEnfermeiro from "./components/enfermeiros/edit";

import ListarEpisodios from "./components/episodios/list";
import CriarEpisodio from "./components/episodios/create";
import EditarEpisodio from "./components/episodios/edit";

import ListarFeridas from "./components/feridas/list";
import CriarFerida from "./components/feridas/create";
import EditarFerida from "./components/feridas/edit";

import ListarMedicos from "./components/medicos/list";
import CriarMedico from "./components/medicos/create";
import EditarMedico from "./components/medicos/edit";

import ListarUtentes from "./components/utentes/list";
import CriarUtente from "./components/utentes/create";
import EditarUtente from "./components/utentes/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Welcome} />

        <Route path="/enfermeiros" Component={ListarEnfermeiros} />
        <Route path="/enfermeiro/criar" Component={CriarEnfermeiro} />
        <Route path="/enfermeiro/editar/:numero_mecan" Component={EditarEnfermeiro} />
        <Route path="/enfermeiros/listar" Component={ListarEnfermeiros} />

        <Route path="/episodios" Component={ListarEpisodios} />
        <Route path="/episodio/criar" Component={CriarEpisodio} />
        <Route path="/episodio/editar/:n_de_episodio" Component={EditarEpisodio} />
        <Route path="/episodios/listar" Component={ListarEpisodios} />

        <Route path="/feridas" Component={ListarFeridas} />
        <Route path="/ferida/criar" Component={CriarFerida} />
        <Route path="/ferida/editar/:id_ferida" Component={EditarFerida} />
        <Route path="/feridas/listar" Component={ListarFeridas} />

        <Route path="/medicos" Component={ListarMedicos} />
        <Route path="/medico/criar" Component={CriarMedico} />
        <Route path="/medico/editar/:n_mecan" Component={EditarMedico} />
        <Route path="/medicos/listar" Component={ListarMedicos} />

        <Route path="/utentes" Component={ListarUtentes} />
        <Route path="/utente/criar" Component={CriarUtente} />
        <Route path="/utente/editar/:n_de_utente" Component={EditarUtente} />
        <Route path="/utentes/listar" Component={ListarUtentes} />
      </Routes>
    </Router>
  );
}

export default App;
