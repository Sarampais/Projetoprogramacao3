import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateComponent = () => {
    const [n_de_utente, setNumeroUtente] = useState(0);
    const [nome, setNome] = useState("");
    const [nif, setNif] = useState(0);
    const [n_seguranca_social, setSegurancaSocial] = useState(0);
    const nav = useNavigate();
  
      const submitHandler = async (event) => {
        event.preventDefault();
    
        const dados = {
          n_de_utente: n_de_utente,
          nome: nome,
          nif: nif,
          n_seguranca_social: n_seguranca_social
        };
        console.log(dados);
        await axios
          .post("http://localhost:5200/utente", dados)
          .then((result) => {
            if (result.data.success) {
              alert("Utente criado com sucesso. [ID: " + result.data.data.n_de_utente + "]");
              nav("/utentes");
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
    setNumeroUtente(0);
    setNome("");
    setNif(0);
    setSegurancaSocial(0);
  };
  
    return (
      <>
        <Form>
        <FormGroup>
            <Label for="nome">Número de Utente de Saúde</Label>
            <Input
              id="n_de_utente"
              name="n_de_utente"
              type="number"
              value={n_de_utente}
              maxLength={9}
              pattern="[0-9] (9)+"
              onChange={(e) => setNumeroUtente(e.target.value)}
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
            <Label for="nif">Número de Identificação Fiscal</Label>
            <Input
              id="nif"
              name="nif"
              type="number"
              value={nif}
              maxLength={9}
              pattern="[0-9] (9)+"  
              onChange={(e) => setNif(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="n_seguranca_social">Nº Segurança Social</Label>
            <Input
              id="n_seguranca_social"
              name="n_seguranca_social"
              type="number"
              value={n_seguranca_social}
              maxLength={9}
              pattern="[0-9] (9)+"
              onChange={(e) => setSegurancaSocial(e.target.value)}
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