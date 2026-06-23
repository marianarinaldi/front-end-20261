import { useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";
import useAuthContext from "../contexts/useAuthContext";
import "./Login.css";

function Login() {
  const { login, logado } = useAuthContext();
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [matriculaErro, setMatriculaErro] = useState("");
  const [senhaErro, setSenhaErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaMatriculaErro = matricula.trim() ? "" : "Informe a matrícula.";
    const novaSenhaErro = senha.trim() ? "" : "Informe a senha.";

    setMatriculaErro(novaMatriculaErro);
    setSenhaErro(novaSenhaErro);

    if (novaMatriculaErro || novaSenhaErro) {
      return;
    }

    login({ matricula, senha });
  };

  if (logado) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={logo} alt="Imagem do Logo" />
          <h1>Aluno Online</h1>
          <p>Acesse o portal para acompanhar sua vida acadêmica.</p>
        </div>

        {(matriculaErro || senhaErro) && (
          <div className="login-error">Revise os campos destacados.</div>
        )}

        <FormLogin
          matricula={matricula}
          setMatricula={setMatricula}
          senha={senha}
          setSenha={setSenha}
          matriculaErro={matriculaErro}
          senhaErro={senhaErro}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Login;
