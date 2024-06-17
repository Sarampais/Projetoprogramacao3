import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditComponent = () => {
  const [n_mecan, setNumeroMecanografico] = useState(0);
  const [nome, setNome] = useState("");
  const [ct_profissional, setCtProfissional] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  const nav = useNavigate();
  const loc = useLocation();

  //hook para load dos dados
  useEffect(() => {
    axios
      .get("http://localhost:5200/medico/" + loc.state.n_mecan)
      .then((result) => {
        if (result.data.success) {
          let data = result.data.data[0];
          setNumeroMecanografico(data.n_mecan);
          setNome(data.nome);
          setCtProfissional(data.ct_profissional);
          setEspecialidade(data.especialidade);

        } else {
          console.error("Ocorreu um erro ao executar o pedido.");
          alert(
            "Não foi possível aceder aos dados. Por favor, tente novamente mais tarde."
          );
        }
      })
      .catch((error) => {
        console.error(
          "Ocorreu um erro ao executar o pedido.",
          error,
          error.message
        );
        alert(
          "Não foi possível aceder aos dados. Por favor, tente novamente mais tarde."
        );
      });
  }, [loc.state.n_mecan]);

  const submitHandler = (event) => {
    event.preventDefault();

    const dados = {
      n_mecan: n_mecan,
      nome: nome,
      ct_profissional: ct_profissional,
      especialidade: especialidade
    };

    axios
      .put("http://localhost:5200/medico/" + loc.state.n_mecan, dados)
      .then((result) => {
        if (result.data.success) {
          alert("Médico atualizado com sucesso.");
          nav("/medicos");
        } else {
          alert(
            "Não foi possível executar a operação. Por favor, tente novamente mais tarde."
          );
        }
      })
      .catch((error) => {
        console.error(
          "Ocorreu um erro ao executar o pedido.",
          error,
          error.message
        );
        alert(
          "Não foi possível executar a operação. Por favor, tente novamente mais tarde."
        );
      });
  };

  const resetHandler = (event) => {
    event.preventDefault();

    if (loc.state?.n_mecan) {
      axios.get("http://localhost:5200/medico/" + loc.state.n_mecan)
        .then((result) => {
          if (result.data.success) {
            let data = result.data.data[0];
            setNumeroMecanografico(data.n_mecan);
            setNome(data.nome);
            setCtProfissional(data.ct_profissional);
            setEspecialidade(data.especialidade);
          }
        });
    }
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="n_mecan">Numero Mecanográfico</Label>
          <Input
            id="n_mecan"
            name="n_mecan"
            type="number"
            value={n_mecan}
            onChange={(e) => setNumeroMecanografico(e.target.value)}
            required
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="ct_profissional">CT profissional</Label>
          <Input
            id="ct_profissional"
            name="ct_profissional"
            type="text"
            value={ct_profissional}
            onChange={(e) => setCtProfissional(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="especialidade">Especialidade</Label>
          <Input
            id="especialidade"
            name="especialidade"
            type="text"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            required
          />
        </FormGroup>
        <Button onClick={submitHandler}>Atualizar</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </Form>
    </>
  );
};

export default EditComponent;