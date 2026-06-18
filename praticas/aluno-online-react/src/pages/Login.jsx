import { useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";
import useAuthContext from "../contexts/useAuthContext";
import "./Login.css";

function Login() {
  const { login, logado } = useAuthContext();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailErro, setEmailErro] = useState("");
  const [senhaErro, setSenhaErro] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoEmailErro = email.trim() ? "" : "Informe o e-mail.";
    const novaSenhaErro = senha.trim() ? "" : "Informe a senha.";

    setEmailErro(novoEmailErro);
    setSenhaErro(novaSenhaErro);
    setErroLogin("");

    if (novoEmailErro || novaSenhaErro) {
      return;
    }

    try {
      await login({ email, senha });
    } catch (erro) {
      setErroLogin(erro.message || "Não foi possível entrar.");
    }
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

        {(emailErro || senhaErro || erroLogin) && (
          <div className="login-error">Revise os campos destacados.</div>
        )}
        {erroLogin && <div className="login-error">{erroLogin}</div>}

      <FormLogin
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha}
        emailErro={emailErro}
        senhaErro={senhaErro}
        handleSubmit={handleSubmit}
      />
      </div>
    </div>
  );
}

export default Login;
