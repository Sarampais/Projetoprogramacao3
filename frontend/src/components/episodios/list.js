import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import React, {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const [episodios, setEpisodio] = useState([]); 
  const nav = useNavigate();

  //hook
  useEffect(() => {
    axios
    .get("http://localhost:5200/episodios")
    .then((result) => {
      if (result.data.success) {
        setEpisodio(result.data.data);
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

 //handler de editar aluno
 const editHandler = async (n_de_episodio) => {
  try {
    nav("/episodio/editar/" + n_de_episodio, { state: { n_de_episodio } });
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
//função de apagar aluno
const deleteHandler = async (n_de_episodio) => {
  try {
    const apagar = window.confirm(
      "Têm a certeza que deseja apagar o episódio " + n_de_episodio + "?"
    );

    if (apagar) {
      axios
        .delete("http://localhost:5200/episodio/" + n_de_episodio, {
        })
        .then((response) => {
          if (response.status === 204) {
            console.info("Episódio " + n_de_episodio + " eliminado com sucesso.");
            alert("Episódio eliminado com sucesso.");
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
            {episodios.map((episodio) => ( // Use 'episodios'
              <tr key={episodio.n_de_episodio}>
                <th scope="row">{episodio.n_de_episodio}</th>
                <td>{episodio.id_ferida}</td>
                <td>{episodio.enfermeiro ? episodio.enfermeiro.nome : "N/A"}</td>
                <td>{episodio.tpo_cicratizacao}</td>
                <td>{episodio.area}</td>
                <td>{episodio.largura}</td>
                <td>{episodio.comprimento}</td>
                <td>{episodio.inflamacao}</td>
                <td>{episodio.qualidade}</td>
                <td>{episodio.odor}</td>
                <td>{episodio.cor}</td>
                <td>{episodio.observacoes}</td>
                <td>{episodio.data}</td>
                <td>
                  <AiFillEdit
                    onClick={() => editHandler(episodio.n_de_episodio)}
                  />
                </td>
                <td>
                  <MdDelete
                    onClick={() => deleteHandler(episodio.n_de_episodio)}
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