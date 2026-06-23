function InputSenha({ senha, erro, mudaValor }) {
  return (
    <div className="input-group">
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={senha}
        onChange={mudaValor}
        placeholder="Digite sua senha"
      />
      <p>{erro}</p>
    </div>
  );
}

export default InputSenha;
