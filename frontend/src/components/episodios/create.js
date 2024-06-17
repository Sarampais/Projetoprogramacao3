import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateComponent = () => {
    const [id_ferida, setIdFerida] = useState(0);
    const [numero_mecan, setEnfermeiro] = useState(0);
    const [tpo_cicratizacao, setTipoCicatrizacao] = useState("");
    const [area, setArea] = useState(0);
    const [largura, setLargura] = useState(0);
    const [comprimento, setComprimento] = useState(0);
    const [inflamacao, setInflamacao] = useState("");
    const [qualidade, setQualidade] = useState("");
    const [odor, setOdor] = useState("");
    const [observacoes, setObservacoes] = useState("");
    const [cor, setCor] = useState("");
    const [data, setData] = useState(0);

    const [feridas, setFeridas] = useState([]);
    const [enfermeiros, setEnfermeiros] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
      axios.get("http://localhost:5200/feridas/")
        .then((feridasResponse) => {
          if (feridasResponse.data.success) {
            setFeridas(feridasResponse.data.data);
          } else {
            console.error("Error fetching feridas:", feridasResponse.data.message);
          }
        })
        .catch((error) => {
          console.error("Error fetching feridas:", error.message);
        });
  
      axios.get("http://localhost:5200/enfermeiros/")
        .then((enfermeirosResponse) => {
          if (enfermeirosResponse.data.success) {
            setEnfermeiros(enfermeirosResponse.data.data);
          } else {
            console.error("Error fetching enfermeiros:", enfermeirosResponse.data.message);
          }
        })
        .catch((error) => {
          console.error("Error fetching enfermeiros:", error.message);
        });
    }, []);

    const submitHandler = async (event) => {
      event.preventDefault();
  
      const dados = {
        id_ferida: id_ferida,
        numero_mecan: numero_mecan,
        tpo_cicratizacao: tpo_cicratizacao,
        area: area,
        largura: largura,
        comprimento: comprimento,
        inflamacao: inflamacao,
        qualidade: qualidade,
        odor: odor,
        observacoes: observacoes,
        cor: cor,
        data: data
      };

      console.log(dados);
      await axios
        .post("http://localhost:5200/episodio", dados)
        .then((result) => {
          if (result.data.success) {
            alert("Episódio criado com sucesso. [ID: " + result.data.data.n_de_episodio + "]");
            nav("/episodios");
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
  
    //handler de limpar (reset) do form
    const resetHandler = (event) => {
      event.preventDefault();

      setIdFerida(0);
      setEnfermeiro(0);
      setTipoCicatrizacao("");
      setArea(0);
      setLargura(0);
      setComprimento(0);
      setInflamacao("");
      setQualidade("");
      setOdor("");
      setObservacoes("");
      setCor("");
      setData("");      
    };
  
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="id_ferida">Ferida</Label>
            <Input 
              type="select" 
              id="id_ferida" 
              name="id_ferida"
              value={id_ferida}
              onChange={(e) => setIdFerida(e.target.value)}
              required
            >
              <option value="">Selecionar Ferida</option>
              {feridas.map((ferida) => (
                <option key={ferida.id_ferida} value={ferida.id_ferida}>
                  {ferida.id_ferida}
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="n_mecan">Enfermeiro</Label>
            <Input 
              type="select" 
              id="numero_mecan" 
              name="numero_mecan"
              value={numero_mecan}
              onChange={(e) => setEnfermeiro(e.target.value)}
              required
            >
              <option value="">Selecionar Enfermeiro</option>
              {enfermeiros.map((enfermeiro) => (
                <option key={enfermeiro.numero_mecan} value={enfermeiro.numero_mecan}>
                  {enfermeiro.numero_mecan} | {enfermeiro.nome} 
                </option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="tpo_cicratizacao">Tipo de Cicatrização</Label>
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
            <Label for="observacoes">Observações</Label>
            <Input
              id="observacoes"
              name="observacoes"
              type="text"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              required
            />
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
          <FormGroup>
            <Label for="data">Data</Label>
            <Input
              id="data"
              name="data"
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
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