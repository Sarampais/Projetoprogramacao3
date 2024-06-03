import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import React, {useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../auth/auth.header";


const ListComponent = () => {
  const [episodio, setEpisodio] = useState(null);
  //hook
  useEffect(() => {
    axios
      .get("http://localhost:5200/episodios", {
        headers: authHeader(),
      })
      .then((result) => {
        if (result.data.sucess) {
          setEpisodio(result.data.data);
        } else {
          console.error("Ocorreu um erro ao executar o pedido.");
          alert(
            "Não foi possível aceder aos dado, por favor tente novamente mais tarde "
          );
        }
      })
      .catch((error) => {});
  });

  //handler de editar aluno
  const editHandler = () => {};

  //função de apagar aluno
  const deleteHandler = () => {};

  return (
    <>
      <Table hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>ID da ferida</th>
            <th>Enfermeiro</th>
            <th>Tipo de Cicatrização</th>
            <th>Área</th>
            <th>Largura</th>
            <th>Comprimento</th>
            <th>Inflamação</th>
            <th>Qualidade</th>
            <th>Odor</th>
            <th>Cor</th>
            <th>Observações</th>
            <th>Data</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr key={1}>
            <th scope="row">1</th>
            <td>77</td>
            <td>Nº 124642161 - Joaquim de Almeida</td>
            <td>Bom</td>
            <td>9 cm2</td>
            <td>20 cm</td>
            <td>15 cm</td>
            <td>Má</td>
            <td>Estável</td>
            <td>Nenhum</td>
            <td>Amarelo</td>
            <td>Nada a acrescentar</td>
            <td>13/04/2024</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={2}>
            <th scope="row">2</th>
            <td>70</td>
            <td>Nº 124642161 - Joaquim de Almeida</td>
            <td>Mau</td>
            <td>3 cm²</td>
            <td>10 cm</td>
            <td>25 cm</td>
            <td>Má</td>
            <td>Estável</td>
            <td>Nenhum</td>
            <td>Castanho</td>
            <td>Nada a acrescentar</td>
            <td>13/05/2024</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={3}>
            <th scope="row">3</th>
            <td>33</td>
            <td>Nº 124642161 - Joaquim de Almeida</td>
            <td>Bom</td>
            <td>7 cm²</td>
            <td>20 cm</td>
            <td>15 cm</td>
            <td>Má</td>
            <td>Estável</td>
            <td>Nenhum</td>
            <td>Vermelho</td>
            <td>Nada a acrescentar</td>
            <td>13/06/2024</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ListComponent;