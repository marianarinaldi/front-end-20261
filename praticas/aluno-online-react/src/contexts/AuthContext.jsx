import { useState } from "react";
import { AuthContext } from "./AuthContextData";

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dados) => {
    const matricula = (dados?.matricula ?? "").toString().trim();
    setUsuario({
      id: matricula || "0",
      nome: "Jose",
      email: `${matricula || "aluno"}@iesb.edu.br`,
    });
    setLogado(true);
  };

  const logout = () => {
    setUsuario(null);
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {/* value =  estado compartilhado */}
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
