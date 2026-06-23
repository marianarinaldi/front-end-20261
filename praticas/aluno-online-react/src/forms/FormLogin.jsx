import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function FormLogin({
  email,
  setEmail,
  senha,
  setSenha,
  emailErro,
  senhaErro,
  handleSubmit,
}) {
  const mudaEmail = (e) => {
    setEmail(e.target.value);
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputMatricula email={email} erro={emailErro} mudaValor={mudaEmail} />
      <InputSenha senha={senha} erro={senhaErro} mudaValor={mudaSenha} />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}

export default FormLogin;
