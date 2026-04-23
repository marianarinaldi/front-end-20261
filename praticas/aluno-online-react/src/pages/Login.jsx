import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login(props) {
  return (
    <>
      <img src={logo} alt="Imagem do Logo" />
      <h1>Aluno Online</h1>
      <FormLogin
        matricula={props.matricula}
        setMatricula={props.setMatricula}
        senha={props.senha}
        setSenha={props.setSenha}
        matriculaErro={props.matriculaErro}
        senhaErro={props.senhaErro}
        handleSubmit={props.handleSubmit}
      />
    </>
  );
}

export default Login;
