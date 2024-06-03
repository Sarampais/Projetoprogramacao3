import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CreateComponent = () => {
    const [id_ferida, setIdFerida] = useState(0);
    const [numero_mecan, setEnfermeiro] = useState(0);
    const [tpo_cicatrizacao, setTipoCicatrizacao] = useState(null);
    const [area, setArea] = useState(0);
    const [largura, setLargura] = useState(0);
    const [comprimento, setComprimento] = useState(0);
    const [inflamacao, setInflamacao] = useState(null);
    const [qualidade, setQualidade] = useState(null);
    const [odor, setOdor] = useState(null);
    const [observacoes, setObservacoes] = useState(null);
    const [cor, setCor] = useState(null);
    const [data, setData] = useState(0);
  
    const submitHandler = () => {};
    const resetHandler = () => {};
  
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="id_ferida">ID da Ferida</Label>
            <select class="form-select" aria-label="Default select" 
              id="id_ferida" 
              name="id_ferida"
              value={id_ferida}  
              onChange={(e) => setIdFerida(e.value)} 
              required>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="numero_mecan">Enfermeiro</Label>
            <select class="form-select" aria-label="Default select" 
              id="numero_mecan" 
              name="numero_mecan"
              value={numero_mecan}  
              onChange={(e) => setEnfermeiro(e.value)} 
              required>
                  <option value="6516849">651684 | João Vasco</option>
                  <option value="124642161">124642161 | Joaquim de Almeida</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label for="tpo_cicatrizacao">Tipo de Cicatrização</Label>
            <select class="form-select" aria-label="Default select" 
              id="tpo_cicatrizacao" 
              name="tpo_cicatrizacao"
              value={tpo_cicatrizacao} 
              onChange={(e) => setTipoCicatrizacao(e.value)} 
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
              onChange={(e) => setArea(e.value)}
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
              onChange={(e) => setLargura(e.value)}
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
              onChange={(e) => setComprimento(e.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="inflamacao">Inflamação</Label>
            <select class="form-select" aria-label="Default select" 
              id="inflamacao" 
              name="inflamacao"
              value={inflamacao}
              onChange={(e) => setInflamacao(e.value)}
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
              onChange={(e) => setQualidade(e.value)}
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
              onChange={(e) => setOdor(e.value)}
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
              onChange={(e) => setObservacoes(e.value)}
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
              onChange={(e) => setCor(e.value)}
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
              onChange={(e) => setData(e.value)}
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