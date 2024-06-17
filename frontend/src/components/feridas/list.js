import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const [feridas, setFerida] = useState([]); 
  const nav = useNavigate();

  useEffect(() => {
    axios
    .get("http://localhost:5200/feridas/")
    .then((result) => {
      if (result.data.success) {
        setFerida(result.data.data);
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
  },[]);


  const editHandler = async (id_ferida) => {
    try {
      nav("/ferida/editar/" + id_ferida, { state: { id_ferida: id_ferida } });
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

  const deleteHandler = async (id_ferida) => {
    try {
      const apagar = window.confirm(
        "Têm a certeza que deseja apagar a ferida " + id_ferida + "?"
      );

      if (apagar) {
        axios
          .delete("http://localhost:5200/ferida/" + id_ferida, {
          })
          .then((response) => {
            if (response.status === 204) { 
              console.info("Ferida " + id_ferida + " eliminada com sucesso.");
              alert("Ferida eliminada com sucesso.");
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
            {feridas.map((ferida) => ( // Use 'episodios'
              <tr key={ferida.id_ferida}>
                <th scope="row">{ferida.id_ferida}</th>
                <td>{ferida.utente ? ferida.utente.nome : "N/A"}</td>
                <td>{ferida.medico ? ferida.medico.nome : "N/A"}</td>
                <td>{ferida.tpo_cicratizacao}</td>
                <td>{ferida.area}</td>
                <td>{ferida.largura}</td>
                <td>{ferida.comprimento}</td>
                <td>{ferida.inflamacao}</td>
                <td>{ferida.qualidade}</td>
                <td>{ferida.odor}</td>
                <td>{ferida.cor}</td>
                <td>
                  <AiFillEdit
                    onClick={() => editHandler(ferida.id_ferida)}
                  />
                </td>
                <td>
                  <MdDelete
                    onClick={() => deleteHandler(ferida.id_ferida)}
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