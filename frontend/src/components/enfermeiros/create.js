import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateComponent = () => {
  const [numero_mecan, setNumeroMecanografico] = useState(0);
  const [nome, setNome] = useState("");
  const [servico, setServico] = useState("");
  const nav = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();

    const dados = {
      numero_mecan: numero_mecan,
      nome: nome,
      servico: servico
    };
    console.log(dados);
    await axios
      .post("http://localhost:5200/enfermeiro", dados)
      .then((result) => {
        if (result.data.success) {
          alert("Enfermeiro criado com sucesso. [ID: " + result.data.data.numero_mecan + "]");
          nav("/enfermeiros");
        } else {
          console.log(dados);
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
      });};

      const resetHandler = (event) => {
        event.preventDefault();
        setNumeroMecanografico(0);
        setNome("");
        setServico("");
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
            value={numero_mecan}
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
        <Button onClick={submitHandler}>Criar</Button>
        <Button onClick={resetHandler}>Limpar</Button>
      </Form>
    </>
  );
};

export default CreateComponent;