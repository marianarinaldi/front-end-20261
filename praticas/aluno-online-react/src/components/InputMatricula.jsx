function InputMatricula({ matricula, erro, mudaValor }) {
  return (
    <div className="input-group">
      <label htmlFor="matricula">Matricula</label>
      <input
        type="text"
        id="matricula"
        name="matricula"
        value={matricula}
        onChange={mudaValor}
        placeholder="Digite sua matrícula"
      />
      <p>{erro}</p>
    </div>
  );
}

export default InputMatricula;
