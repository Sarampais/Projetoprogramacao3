import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import React, {useState} from "react";


const EditComponent = () => {
    const [n_de_utente, setNumeroUtente] = useState(0);
    const [nome, setNome] = useState(null);
    const [nif, setNif] = useState(0);
    const [n_seguranca_social, setSegurancaSocial] = useState(0);
    
   
    const submitHandler = () => {};
    const resetHandler = () => {};
  
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
              onChange={(e) => setNumeroUtente(e.value)}
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
            <Label for="nif">Número de Identificação Fiscal</Label>
            <Input
              id="nif"
              name="nif"
              type="number"
              value={nif}
              maxLength={9}
              pattern="[0-9] (9)+"
              onChange={(e) => setNif(e.value)}
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
              onChange={(e) => setSegurancaSocial(e.value)}
              required
            />
          </FormGroup>
          <Button onClick={submitHandler}>Criar</Button>
          <Button onClick={resetHandler}>Limpar</Button>
        </Form>
      </>
    );
  };
  
  export default EditComponent;