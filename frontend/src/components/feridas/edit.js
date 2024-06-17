import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditComponent = () => {
  const [id_ferida, setIdFerida] = useState(0);
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
  const loc = useLocation();

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

    axios
      .get("http://localhost:5200/ferida/" + loc.state.id_ferida)
      .then((result) => {
        if (result.data.success) {
          let data = result.data.data[0];
          setIdFerida(data.id_ferida);
          setNumeroUtente(data.n_de_utente);
          setMedico(data.n_mecan);
          setTipoCicatrizacao(data.tpo_cicratizacao);
          setArea(data.area);
          setLargura(data.largura);
          setComprimento(data.comprimento);
          setInflamacao(data.inflamacao);
          setQualidade(data.qualidade); 
          setOdor(data.odor);
          setCor(data.cor);

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
  }, [loc.state.id_ferida]);


  const submitHandler = (event) => {
    event.preventDefault();

    const dados = {
      id_ferida: id_ferida,
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

    axios
      .put("http://localhost:5200/ferida/" + loc.state.id_ferida, dados)
      .then((result) => {
        if (result.data.success) {
          alert("Ferida atualizada com sucesso.");
          nav("/feridas");
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

    if (loc.state?.id_ferida) {
      axios.get("http://localhost:5200/ferida/" + loc.state.id_ferida)
        .then((result) => {
          if (result.data.success) {
            let data = result.data.data[0];
            setIdFerida(data.id_ferida);
            setNumeroUtente(data.n_de_utente);
            setMedico(data.n_mecan);
            setTipoCicatrizacao(data.tpo_cicratizacao);
            setArea(data.area);
            setLargura(data.largura);
            setComprimento(data.comprimento);
            setInflamacao(data.inflamacao);
            setQualidade(data.qualidade); 
            setOdor(data.odor);
            setCor(data.cor);
          }
        });
    }
  };

  return (
    <>
        <Form>
        <FormGroup>
          <Label for="id_ferida">ID Ferida</Label>
          <Input
            id="id_ferida"
            name="id_ferida"
            type="number"
            value={id_ferida}
            onChange={(e) => setIdFerida(e.target.value)}
            required
            readOnly
          />
        </FormGroup>
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
              {medicos.map((medico) => (
                <option key={medico.n_mecan} value={medico.n_mecan}> 
                  {medico.n_mecan} | {medico.nome}
                </option>
              ))}
            </Input>
          </FormGroup>
        <FormGroup>
          <Label for="tpo_cicratizacao">Tipo de cicatrização</Label>
          <select class="form-select" aria-label="Default select" 
            id="tpo_cicratizacao" 
            name="tpo_cicratizacao"
            value={tpo_cicratizacao} 
            onChange={(e) => setTipoCicatrizacao(e.target.value)} 
            required>
            <option value="Boa">Boa</option>
            <option value="Estável">Estável</option>
            <option value="Má">Má</option>
          </select>
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
        <Button class="btn btn-primary" onClick={submitHandler}>Atualizar</Button>
        <Button onClick={resetHandler}>Reset</Button>
      </Form>
    </>
  );
};

export default EditComponent;