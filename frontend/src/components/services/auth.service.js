import axios from "axios";

class AuthService {
  //criar função de login
  async login(email, password) {
    return axios
      .post("https://Localhost:5000/api/v1/login", (email, password))
      .then((result) => {
        if (result.data.success && result.data.AccessToken) {
          localStorage.setItem("user", JSON.stringify(result.data));
        }
        return result.data;
      })
      .catch((error) => {
        console.error("Ocorreu um erro na execução da pedido.");
        alert(
          "Não foi possível aceder ao sistema. Tente novamente mais tarde!"
        );
      });
  }

  //função logout
  async logout() {
    localStorage.removeItem("user");
  }

  //função que retorna o atual user
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();