import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditComponent = () => {
  const [numero_mecan, setNumeroMecanografico] = useState(0);
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");

  const nav = useNavigate();
  const loc = useLocation();

  //hook para load dos dados
  useEffect(() => {
    axios
      .get("http://localhost:5200/enfermeiro/" + loc.state.numero_mecan)
      .then((result) => {
        if (result.data.success) {
          let data = result.data.data[0];
          set;
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
  }, [loc.state.numero_mecan]);

  //handler de submissão do form
  const submitHandler = (event) => {
    event.preventDefault();

    const dados = {
      numero_mecan: numero_mecan,
      nome: nome,
      servico: servico,
    };

    axios
      .put("http://localhost:5200/enfermeiro/" + loc.state.numero_mecan, dados)
      .then((result) => {
        console.log("result", result);
        if (result.data.success) {
          alert("Enfermeiro atualizado com sucesso.");
          nav("/enfermeiros");
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

  //handler de limpar (reset) do form
  const resetHandler = (event) => {
    event.preventDefault();

    if (loc.state?.numero_mecan) {
      axios
        .get("http://localhost:5200/enfermeiro/" + loc.state.numero_mecan)
        .then((result) => {
          if (result.data.success) {
            let data = result.data.data[0];
            setNumeroMecanografico(data.numero_mecan);
            setNome(data.nome);
            setServico(data.servico);
          }
        });
    }
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="numero_mecan">Numero Mecanográfico</Label>
          <Input
            id="numero_mecan"
            name="numero_mecan"
            type="number"
            value={numero_mecan}
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
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="servico">Serviço</Label>
          <Input
            id="servico"
            name="servico"
            type="text"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
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
