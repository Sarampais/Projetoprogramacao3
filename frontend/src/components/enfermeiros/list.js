import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import React, {useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../auth/auth.header";

const ListComponent = () => {
  const [enfermeiro, setEnfermeiro] = useState(null);
  //hook
  useEffect(() => {
    axios
      .get("http://localhost:5200/enfermeiros", {
        headers: authHeader(),
      })
      .then((result) => {
        if (result.data.sucess) {
          setEnfermeiro(result.data.data);
        } else {
          console.error("Ocorreu um erro ao executar o pedido.");
          alert(
            "Não foi possível aceder aos dados, por favor tente novamente mais tarde"
          );
        }
      })
      .catch((error) => {});
  });

  const editHandler = () => {};

  const deleteHandler = () => {};

  return (
    <>
      <Table hover striped>
        <thead>
          <tr>
            <th>Numero Mecanográfico</th>
            <th>Nome</th>
            <th>Serviço</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr key={123456789}>
            <th scope="row">123456789</th>
            <td>Telma Batista</td>
            <td>Serviço A</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <MdDelete onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={9867632256}>
            <th scope="row">9867632256</th>
            <td>João Piorro</td>
            <td>Serviço B</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <MdDelete onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={783746466292}>
            <th scope="row">783746466292</th>
            <td>Tatiana Leal</td>
            <td>Serviço C</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <MdDelete onClick={deleteHandler} />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ListComponent;