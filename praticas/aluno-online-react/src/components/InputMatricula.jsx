function InputMatricula({ matricula, erro, mudaValor }) {
  return (
    <div className="form-group">
      <label htmlFor="matricula">Matricula</label>
      <input
        type="text"
        id="matricula"
        name="matricula"
        value={matricula}
        onChange={mudaValor}
        placeholder="Digite sua matrícula"
      />
      {!!erro && <p className="field-error">{erro}</p>}
    </div>
  );
}

export default InputMatricula;
