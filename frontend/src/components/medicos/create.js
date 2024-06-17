import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateComponent = () => {
  const [n_mecan, setNumeroMecanografico] = useState(0);
  const [nome, setNome] = useState("");
  const [ct_profissional, setCtProfissional] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const nav = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const dados = {
      n_mecan: n_mecan,
      nome: nome,
      ct_profissional: ct_profissional,
      especialidade: especialidade
    };
    console.log(dados);
    await axios
      .post("http://localhost:5200/medico", dados)
      .then((result) => {
        if (result.data.success) {
          alert("Médico criado com sucesso. [ID: " + result.data.data.n_mecan + "]");
          nav("/medicos");
        } else {
          alert(
            "Não foi possível executar a operação. Por favor, tente novamente mais tarde."
          );
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao executar o pedido.", error.message);
        alert(
          "Não foi possível executar a operação. Por favor, tente novamente mais tarde."
        );
      });
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setNumeroMecanografico(0);
    setNome("");
    setCtProfissional("");
    setEspecialidade("");
  };

  return (
    <>
      <Form>
      <FormGroup>
          <Label for="nome">Numero Mecanográfico</Label>
          <Input
            id="numero_mecan"
            name="numero_mecan"
            type="number"
            value={n_mecan}
            maxLength={9}
            pattern="[0-9] (9)+"
            onChange={(e) => setNumeroMecanografico(e.target.value)}
            required
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
        <Button onClick={submitHandler}>Criar</Button>
        <Button onClick={resetHandler}>Limpar</Button>
      </Form>
    </>
  );
};

export default CreateComponent;