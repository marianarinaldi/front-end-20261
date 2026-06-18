function InputMatricula({ email, erro, mudaValor }) {
  return (
    <div className="form-group">
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={mudaValor}
      />
      {!!erro && <p className="field-error">{erro}</p>}
    </div>
  );
}

export default InputMatricula;
