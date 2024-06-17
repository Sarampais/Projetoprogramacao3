import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


const EditComponent = () => {
    const [n_de_utente, setNumeroUtente] = useState(0);
    const [nome, setNome] = useState("");
    const [nif, setNif] = useState(0);
    const [n_seguranca_social, setSegurancaSocial] = useState(0);
    
    const nav = useNavigate();
    const loc = useLocation();
  
    useEffect(() => {  
      axios
        .get("http://localhost:5200/utente/" + loc.state.n_de_utente)
        .then((result) => {
          if (result.data.success) {
            let data = result.data.data[0];
            setNumeroUtente(data.n_de_utente);
            setNome(data.nome);
            setNif(data.nif);
            setSegurancaSocial(data.n_seguranca_social);

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
    }, [loc.state.n_de_utente]);

    const submitHandler = (event) => {
      event.preventDefault();
  
      const dados = {
        n_de_utente: n_de_utente,
        nome: nome,
        nif: nif,
        n_seguranca_social: n_seguranca_social
      };
  
      axios
        .put("http://localhost:5200/utente/" + loc.state.n_de_utente, dados)
        .then((result) => {
          if (result.data.success) {
            alert("Utente atualizado com sucesso.");
            nav("/utentes");
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

      if (loc.state?.n_de_utente) {
        axios.get("http://localhost:5200/utente/" + loc.state.n_de_utente)
          .then((result) => {
            if (result.data.success) {
              let data = result.data.data[0];
              setNumeroUtente(data.n_de_utente);
              setNome(data.nome);
              setNif(data.nif);
              setSegurancaSocial(data.n_seguranca_social);
            }
          });
      }
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
          <Button onClick={submitHandler}>Atualizar</Button>
          <Button onClick={resetHandler}>Reset</Button>
        </Form>
      </>
    );
  };
  
  export default EditComponent;