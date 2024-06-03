import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import React, {useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../auth/auth.header";

const ListComponent = () => {
  const [medico, setMedico] = useState(null);
  //hook
  useEffect(() => {
    axios
      .get("http://localhost:5200/medicos", {
        headers: authHeader(),
      })
      .then((result) => {
        if (result.data.sucess) {
          setMedico(result.data.data);
        } else {
          console.error("Ocorreu um erro ao executar o pedido.");
          alert(
            "Não foi possível aceder aos dados, por favor tente novamente mais tarde "
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
            <th>Numero Mecanográfico</th>
            <th>Nome</th>
            <th>CT profissional</th>
            <th>Especialidade</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr key={1238471}>
            <th scope="row">1238471</th>
            <td>Joana Cunha</td>
            <td>Cirugiã</td>
            <td>Ginecologia</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={93689251}>
            <th scope="row">93689251</th>
            <td>João Pedro</td>
            <td>Interno</td>
            <td>Oftalmologia</td>
            <td>
              <AiFillEdit onClick={editHandler} />
            </td>
            <td>
              <RiDeleteBin2Fill onClick={deleteHandler} />
            </td>
          </tr>
          <tr key={56897173747}>
            <th scope="row">56897173747</th>
            <td>Marta Mendes</td>
            <td>Interna</td>
            <td>Cuidados Paliativos</td>
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