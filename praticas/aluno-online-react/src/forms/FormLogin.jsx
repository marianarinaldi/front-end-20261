import { useState } from "react";
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
  const mudaMatricula = (e) => {
    setMatricula(e.target.value);
  };

  const mudaSenha = (e) => {
    setSenha(e.target.value);
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
