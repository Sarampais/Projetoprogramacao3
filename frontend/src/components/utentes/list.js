import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const [utentes, setUtente] = useState([]);
  const nav = useNavigate();
  
  useEffect(() => {
    axios
      .get("http://localhost:5200/utentes/")
      .then((result) => {
        if (result.data.success) {
          setUtente(result.data.data);
        } else {
          console.error("Ocorreu um erro ao executar o pedido.");
          alert(
            "Não foi possível aceder aos dado, por favor tente novamente mais tarde "
          );
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao executar o pedido." || error.message);
        alert(
          "Não foi possível aceder aos dados, por favor tente novamente mais tarde."
        );
      });
  },[]);

  const editHandler = async (n_de_utente) => {
    try {
      nav("/utente/editar/" + n_de_utente, { state: { n_de_utente } });
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

  const deleteHandler = async (n_de_utente) => {
    try {
      const apagar = window.confirm(
        "Têm a certeza que deseja apagar o utente " + n_de_utente + "?"
      );

      if (apagar) {
        axios
          .delete("http://localhost:5200/utente/" + n_de_utente, {
          })
          .then((response) => {
            if (response.status === 204) {
              console.info("Utente " + n_de_utente + " eliminado com sucesso.");
              alert("Utente eliminado com sucesso.");
              nav(0);
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
            <th>Número de Utente de Saúde</th>
            <th>Nome</th>
            <th>Número de Identificação Fiscal</th>
            <th>Número de Segurança Social</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {utentes.map((utente) => (
            <tr key={utente.n_de_utente}>
              <th scope="row">{utente.n_de_utente}</th>
              <td>{utente.nome}</td>
              <td>{utente.nif}</td>
              <td>{utente.n_seguranca_social}</td>
              <td>
                <AiFillEdit onClick={() => editHandler(utente.n_de_utente)} />
              </td>
              <td>
                <MdDelete onClick={() => deleteHandler(utente.n_de_utente)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListComponent;