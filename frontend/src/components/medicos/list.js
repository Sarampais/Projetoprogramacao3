import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const [medicos, setMedico] = useState([]);
  const nav = useNavigate();

  
  useEffect(() => {
    axios
      .get("http://localhost:5200/medicos")
      .then((result) => {
        if (result.data.success) {
          setMedico(result.data.data);
        } else {
          console.error("Ocorreu um erro ao executar o pedido.");
          alert(
            "Não foi possível aceder aos dados, por favor tente novamente mais tarde."
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

  const editHandler = async (n_mecan) => {
    try {
      nav("/medico/editar/" + n_mecan, { state: { n_mecan } });
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

  const deleteHandler = async (n_mecan) => {
    try {
      const apagar = window.confirm(
        "Têm a certeza que deseja apagar o Médico " + n_mecan + "?"
      );

      if (apagar) {
        axios
          .delete("http://localhost:5200/medico/" + n_mecan)
          .then((response) => {
            if (response.status === 204) { 
              console.info("Médico " + n_mecan + " eliminado com sucesso.");
              alert("Médico eliminado com sucesso.");
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
            <th>Numero Mecanográfico</th>
            <th>Nome</th>
            <th>CT profissional</th>
            <th>Especialidade</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico) => (
            <tr key={medico.n_mecan}> {/* Use unique key */}
              <th scope="row">{medico.n_mecan}</th>
              <td>{medico.nome}</td> {/* Access data properties */}
              <td>{medico.ct_profissional}</td>
              <td>{medico.especialidade}</td>
              <td>
                <AiFillEdit onClick={() => editHandler(medico.n_mecan)} /> {/* Pass numero_mecan in an arrow function */}
              </td>
              <td>
                <MdDelete onClick={() => deleteHandler(medico.n_mecan)} /> {/* Pass numero_mecan in an arrow function */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListComponent;