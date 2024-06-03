import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

const Login = () => {
  const [numero_mecan, setNumeroMecanografico] = useState("");
  const [password, setPassword] = useState("");
  const [load, setLoad] = useState(false);
  const nav = useNavigate();

  const HandlerLogin = (event) => {
    event.preventDefault();
    setLoad(true);

    authService
      .login(numero_mecan, password)
      .then((result) => {
        if (result === "" || result === false) {
          console.error("Autenticação é inválida!");
          setLoad(false);
        } else {
          setLoad(false);
          nav("/listar");
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao executar o pedido." || error.message);
        alert("Ocorreu um erro. Por favor, tente mais tarde.");
      });
  };

  return (
    <>
      <h1>Sistema de Autenticação</h1>
      <form>
        <label htmlFor="numero_mecan">Número Mecanográfico </label>
        <input
          type="number"
          id="numero_mecan"
          name="numero_mecan"
          value={numero_mecan}
          onChange={(value) => setNumeroMecanografico(value.target.value)}
          required
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(value) => setPassword(value.target.value)}
          required
        />

        <button type="submit" onClick={HandlerLogin}>
          {" "}
          Entrar
        </button>
      </form>
    </>
  );
};

export default Login;