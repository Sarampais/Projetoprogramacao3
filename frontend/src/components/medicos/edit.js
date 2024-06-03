import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import React, {useState, useEffect } from "react";
import axios from "axios";

const EditComponent = () => {
  const [numero_mecan, setNumeroMecanografico] = useState(0);
  const [nome, setNome] = useState(null);
  const [ct_profissional, setCtProfissional] = useState(null);
  const [especialidade, setEspecialidade] = useState(null);


  const submitHandler = () => {};
  const resetHandler = () => {};

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
            onChange={(e) => setNumeroMecanografico(e.value)}
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
            onChange={(e) => setCtProfissional(e.value)}
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
            onChange={(e) => setEspecialidade(e.value)}
            required
          />
        </FormGroup>
        <Button onClick={submitHandler}>Atualizar</Button>
        <Button onClick={resetHandler}>Limpar</Button>
      </Form>
    </>
  );
};

export default EditComponent;