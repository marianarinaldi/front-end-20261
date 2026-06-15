import { useState } from "react";
import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({ matricula: "", senha: "" });
  const [submitted, setSubmitted] = useState(false);

  const validarFormulario = () => {
    const novoErros = { matricula: "", senha: "" };
    let valido = true;

    // Validar matrícula (obrigatório e deve ter pelo menos 5 caracteres)
    if (!matricula.trim()) {
      novoErros.matricula = "Matrícula é obrigatória";
      valido = false;
    } else if (matricula.trim().length < 5) {
      novoErros.matricula = "Matrícula deve ter pelo menos 5 caracteres";
      valido = false;
    }

    // Validar senha (obrigatório e mínimo 6 caracteres)
    if (!senha.trim()) {
      novoErros.senha = "Senha é obrigatória";
      valido = false;
    } else if (senha.length < 6) {
      novoErros.senha = "Senha deve ter no mínimo 6 caracteres";
      valido = false;
    }

    setErrors(novoErros);
    return valido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      setSubmitted(true);
      console.log("✓ Formulário válido! Dados:", { matricula, senha });
      // Aqui você faria a autenticação real
    } else {
      setSubmitted(false);
      console.log("✗ Formulário com erros");
    }
  };

  const handleMatriculaChange = (e) => {
    setMatricula(e.target.value);
    // Limpar erro de matrícula ao digitar
    if (errors.matricula) {
      setErrors((prev) => ({ ...prev, matricula: "" }));
    }
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
    // Limpar erro de senha ao digitar
    if (errors.senha) {
      setErrors((prev) => ({ ...prev, senha: "" }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Imagem do Logo" className="login-logo" />
        <h1>Aluno Online</h1>
        {submitted && (
          <div className="success-message">✓ Login realizado com sucesso!</div>
        )}
        <FormLogin
          matricula={matricula}
          setMatricula={handleMatriculaChange}
          senha={senha}
          setSenha={handleSenhaChange}
          matriculaErro={errors.matricula}
          senhaErro={errors.senha}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Login;
