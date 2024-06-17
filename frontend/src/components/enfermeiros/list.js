import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const [enfermeiros, setEnfermeiro] = useState([]);
  const nav = useNavigate();

  //hook
  useEffect(() => {
    axios
      .get("http://localhost:5200/enfermeiros/")
      .then((result) => {
        if (result.data.success) {
          setEnfermeiro(result.data.data);
        } else {
          console.error("Ocorreu um erro ao executar o pedido.");
          alert(
            "Não foi possível aceder aos dados, por favor tente novamente mais tarde"
          );
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao executar o pedido." || error.message);
        alert(
          "Não foi possível aceder aos dados, por favor tente novamente mais tarde."
        );
      });
  }, []);

  const editHandler = (numero_mecan) => {
    try {
      nav("/enfermeiro/editar/" + numero_mecan, { state: { numero_mecan } });
    } catch (error) {
      console.error(
        "Não foi possível executar a operação pretendida. ",
        error,
        error.message
      );
      alert(
        "Não foi possível aceder aos dados, por favor tente novamente mais tarde."
      );
    }
  };

  const deleteHandler = async (numero_mecan) => {
    try {
      const apagar = window.confirm(
        `Tem certeza que deseja apagar o enfermeiro ${numero_mecan}?`
      );

      if (apagar) {
        axios
          .delete("http://localhost:5200/enfermeiro/" + numero_mecan)
          .then((response) => {
            if (response.status === 204) {
              console.info(
                "Enfermeiro " + numero_mecan + " eliminado com sucesso."
              );
              alert("Enfermeiro eliminado com sucesso.");
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
      } else {
        console.info("Evento cancelado...");
      }
    } catch (error) {
      console.error(
        "Não foi possível executar a operação pretendida. ",
        error,
        error.message
      );
      alert(
        "Não foi possível aceder aos dados, por favor tente novamente mais tarde."
      );
    }
  };

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
          {enfermeiros.map((enfermeiro) => (
            <tr key={enfermeiro.numero_mecan}>
              {" "}
              {/* Use unique key */}
              <th scope="row">{enfermeiro.numero_mecan}</th>
              <td>{enfermeiro.nome}</td> {/* Access data properties */}
              <td>{enfermeiro.servico}</td>
              <td>
                <AiFillEdit
                  onClick={() => editHandler(enfermeiro.numero_mecan)}
                />
              </td>
              <td>
                <MdDelete
                  onClick={() => deleteHandler(enfermeiro.numero_mecan)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListComponent;
