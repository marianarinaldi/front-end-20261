function InputSenha({ senha, erro, mudaValor }) {
  return (
    <div className="form-group">
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={senha}
        onChange={mudaValor}
      />
      {!!erro && <p className="field-error">{erro}</p>}
    </div>
  );
}

export default InputSenha;
