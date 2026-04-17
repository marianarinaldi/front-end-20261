import { useState } from "react";
import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();
  const [matriculaErro, setMatriculaErro] = useState();
  const [senhaErro, setSenhaErro] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      setMatriculaErro("Matricula é obrigatório");
    }
    if (!senha) {
      setSenhaErro("Senha é obrigatória");
    }
  };

  const mudaMatricula = (e) => {
    setMatricula(e.target.value);
    setMatriculaErro("");
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro("");
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <InputMatricula
          matricula={matricula}
          erro={matriculaErro}
          mudaValor={mudaMatricula}
        />
        <InputSenha senha={senha} erro={senhaErro} mudaValor={mudaSenha} />
        <BotaoSubmit children={"Entrar"} />
      </form>
    </>
  );
}

export default FormLogin;
