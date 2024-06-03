import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import React, {useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../auth/auth.header";

const ListComponent = () => {
  const [utente, setUtente] = useState(null);
  //hook
  useEffect(() => {
    axios
      .get("http://localhost:5200/utentes", {
        headers: authHeader(),
      })
      .then((result) => {
        if (result.data.sucess) {
          setUtente(result.data.data);
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
            <th>Número de Utente de Saúde</th>
            <th>Nome</th>
            <th>Número de Identificação Fiscal</th>
            <th>Número de Segurança Social</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr key={156876543}>
            <th scope="row">156876543</th>
            <td>Rita Carvalho</td>
            <td>234582726</td>
            <td>194632785</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={229387264}>
            <th scope="row">229387264</th>
            <td>Margarida Alves</td>
            <td>283864012</td>
            <td>334624535</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={327890153}>
            <th scope="row">327890153</th>
            <td>Tatiana Leal</td>
            <td>098236782</td>
            <td>928424932</td>
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