import { useState } from "react";

function InputSenha({ senha, erro, mudaValor }) {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={senha}
        onChange={mudaValor}
      />
      <p>{erro}</p>
    </>
  );
}

export default InputSenha;
