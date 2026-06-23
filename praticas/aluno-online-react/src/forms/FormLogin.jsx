import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function FormLogin({
  matricula,
  setMatricula,
  senha,
  setSenha,
  matriculaErro,
  senhaErro,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <InputMatricula
        matricula={matricula}
        erro={matriculaErro}
        mudaValor={setMatricula}
      />
      <InputSenha senha={senha} erro={senhaErro} mudaValor={setSenha} />
      <BotaoSubmit children={"Entrar"} />
    </form>
  );
}

export default FormLogin;
