import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContextData";
import { entrar } from "../services/authService";

const CHAVE_TOKEN = "aluno-online-token";
const CHAVE_USUARIO = "aluno-online-usuario";

function obterSessaoInicial() {
  const token = localStorage.getItem(CHAVE_TOKEN);
  const usuarioSalvo = localStorage.getItem(CHAVE_USUARIO);

  if (!token || !usuarioSalvo) {
    return { logado: false, usuario: null };
  }

  try {
    return { logado: true, usuario: JSON.parse(usuarioSalvo) };
  } catch {
    localStorage.removeItem(CHAVE_TOKEN);
    localStorage.removeItem(CHAVE_USUARIO);
    return { logado: false, usuario: null };
  }
}

function AuthProvider({ children }) {
  const sessaoInicial = obterSessaoInicial();
  const [logado, setLogado] = useState(sessaoInicial.logado);
  const [usuario, setUsuario] = useState(sessaoInicial.usuario);

  const login = async (dados) => {
    const { usuario: usuarioAutenticado, token } = await entrar(dados);

    localStorage.setItem(CHAVE_TOKEN, token);
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuarioAutenticado));
    setUsuario(usuarioAutenticado);
    setLogado(true);
  };

  const logout = () => {
    localStorage.removeItem(CHAVE_TOKEN);
    localStorage.removeItem(CHAVE_USUARIO);
    setUsuario(null);
    setLogado(false);
  };

  useEffect(() => {
    const forcarLogout = () => {
      logout();
    };

    window.addEventListener("auth:unauthorized", forcarLogout);

    return () => {
      window.removeEventListener("auth:unauthorized", forcarLogout);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
