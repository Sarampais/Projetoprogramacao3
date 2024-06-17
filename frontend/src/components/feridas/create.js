import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateComponent = () => {
  const [n_de_utente, setNumeroUtente] = useState(0);
  const [n_mecan, setMedico] = useState(0);
  const [tpo_cicratizacao, setTipoCicatrizacao] = useState("");
  const [area, setArea] = useState(0);
  const [largura, setLargura] = useState(0);
  const [comprimento, setComprimento] = useState(0);
  const [inflamacao, setInflamacao] = useState("");
  const [qualidade, setQualidade] = useState("");
  const [odor, setOdor] = useState("");
  const [cor, setCor] = useState("");

  const [utentes, setUtentes] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5200/utentes/")
      .then((utentesResponse) => {
        if (utentesResponse.data.success) {
          setUtentes(utentesResponse.data.data);
        } else {
          console.error("Error fetching utentes:", utentesResponse.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching utentes:", error.message);
      });

    axios.get("http://localhost:5200/medicos/")
      .then((medicosResponse) => {
        if (medicosResponse.data.success) {
          setMedicos(medicosResponse.data.data);
        } else {
          console.error("Error fetching medicos:", medicosResponse.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching medicos:", error.message);
      });
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    const dados = {
      n_de_utente: n_de_utente,
      n_mecan: n_mecan,
      tpo_cicratizacao: tpo_cicratizacao,
      area: area,
      largura: largura, 
      comprimento: comprimento,
      inflamacao: inflamacao,
      qualidade: qualidade, 
      odor: odor,
      cor: cor
    };

    console.log(dados);
    await axios
      .post("http://localhost:5200/ferida", dados)
      .then((result) => {
        if (result.data.success) {
          alert("Ferida criada com sucesso. [ID: " + result.data.data.n_de_utente + "]");
          nav("/feridas");
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
    setMedico(0);
    setTipoCicatrizacao("");
    setArea(0);
    setLargura(0);
    setComprimento(0);
    setInflamacao("");
    setQualidade(""); 
    setOdor("");
    setCor("");
  };

  return (
    <>
      <Form>
      <FormGroup>
          <Label for="n_de_utente">Utente</Label>
          <Input 
            type="select" 
            id="n_de_utente" 
            name="n_de_utente"
            value={n_de_utente}
            onChange={(e) => setNumeroUtente(e.target.value)}
            required
          >
            <option value="">Selecionar Utente</option>
            {utentes.map((utente) => (
              <option key={utente.n_de_utente} value={utente.n_de_utente}>
                {utente.n_de_utente} | {utente.nome} 
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="n_mecan">Médico</Label>
          <Input 
            type="select" 
            id="n_mecan" 
            name="n_mecan"
            value={n_mecan}
            onChange={(e) => setMedico(e.target.value)}
            required
          >
            <option value="">Selecionar Médico</option>
            {medicos.map((medico) => (
              <option key={medico.n_mecan} value={medico.n_mecan}>
                {medico.n_mecan} | {medico.nome} 
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="tpo_cicratizacao">Tipo de cicatrização</Label>
          <Input 
            type="select" 
            id="tpo_cicratizacao" 
            name="tpo_cicratizacao"
            value={tpo_cicratizacao}
            onChange={(e) => setTipoCicatrizacao(e.target.value)}
            required
          >
            <option value="Boa">Boa</option>
            <option value="Estável">Estável</option>
            <option value="Má">Má</option>
          </Input>
        </FormGroup>
        <FormGroup>
            <Label for="area">Área</Label>
            <Input
              id="area"
              name="area"
              type="number"
              value={area}
              maxLength={9}
              pattern="[0-9] (9)+"
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="largura">Largura</Label>
            <Input
              id="largura"
              name="largura"
              type="number"
              value={largura}
              maxLength={9}
              pattern="[0-9] (9)+"
              onChange={(e) => setLargura(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="comprimento">Comprimento</Label>
            <Input
              id="comprimento"
              name="comprimento"
              type="number"
              value={comprimento}
              maxLength={9}
            pattern="[0-9] (9)+"
              onChange={(e) => setComprimento(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="inflamacao">Inflamação</Label>
            <select class="form-select" aria-label="Default select" 
              id="inflamacao" 
              name="inflamacao"
              value={inflamacao}
              onChange={(e) => setInflamacao(e.target.value)}
              required>
                <option value="Estável">Estável</option>
                <option value="Grave">Grave</option>
                <option value="Muito Grave">Muito Grave</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="qualidade">Qualidade</Label>
            <select class="form-select" aria-label="Default select" 
              id="qualidade" 
              name="qualidade" 
              value={qualidade}
              onChange={(e) => setQualidade(e.target.value)}
              required>
                <option value="Boa">Boa</option>
                <option value="Estável">Estável</option>
                <option value="Má">Má</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="odor">Odor</Label>
            <select class="form-select" aria-label="Default select" 
              id="odor" 
              name="odor"
              value={odor}
              onChange={(e) => setOdor(e.target.value)}
              required>
                <option value="Sem Odor">Sem Odor</option>
                <option value="Odor Ligeiro">Odor Ligeiro</option>
                <option value="Odor Grave">Odor Grave</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="cor">Cor</Label>
            <Input
              id="cor"
              name="cor"
              type="text"
              value={cor}
              onChange={(e) => setCor(e.target.value)}
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