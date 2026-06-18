import { useState } from "react";
import { AuthContext } from "./AuthContextData";

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const login = (dados) => {
    
    setUsuario({
      id: "0",
      nome: "mariana",
      email: `mariana@iesb.edu.br`,
    });
    setLogado(true);
  };

  const logout = () => {
    setUsuario(null);
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
