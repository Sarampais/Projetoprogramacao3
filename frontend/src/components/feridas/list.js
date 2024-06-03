import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import React, {useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../auth/auth.header";

const ListComponent = () => {
  const [ferida, setFerida] = useState(null);
  //hook
  useEffect(() => {
    axios
      .get("http://localhost:5200/feridas", {
        headers: authHeader(),
      })
      .then((result) => {
        if (result.data.sucess) {
          setFerida(result.data.data);
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
            <th>Utente</th>
            <th>Médico</th>
            <th>Tipo de Cicatrização</th>
            <th>Área</th>
            <th>Largura</th>
            <th>Comprimento</th>
            <th>Inflamação</th>
            <th>Qualidade</th>
            <th>Odor</th>
            <th>Cor</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
        <tr key={1}>
            <th scope="row">1</th>
            <td>Nº 243563167 - Paula Mendes</td>
            <td>Nº 15425468 - João Lopes</td>
            <td>Estável</td>
            <td>2 cm²</td>
            <td>1 cm</td>
            <td>1 cm</td>
            <td>Estável</td>
            <td>Boa</td>
            <td>Nenhum</td>
            <td>Amarelo</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={2}>
            <th scope="row">2</th>
            <td>Nº 243563167 - Paula Mendes</td>
            <td>Nº 15425468 - João Lopes</td>
            <td>Estável</td>
            <td>2 cm²</td>
            <td>1 cm</td>
            <td>1 cm</td>
            <td>Estável</td>
            <td>Boa</td>
            <td>Nenhum</td>
            <td>Amarelo</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={3}>
            <th scope="row">3</th>
            <td>Nº 243563167 - Paula Mendes</td>
            <td>Nº 15425468 - João Lopes</td>
            <td>Estável</td>
            <td>2 cm²</td>
            <td>1 cm</td>
            <td>1 cm</td>
            <td>Estável</td>
            <td>Boa</td>
            <td>Nenhum</td>
            <td>Amarelo</td>
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