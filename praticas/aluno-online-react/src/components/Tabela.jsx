function Tabela({ titulos = [], dados = [], classPrefix = "", tituloSecao = "" }) {
  if (!titulos.length || !dados.length) {
    return <p>Nenhum dado disponível</p>;
  }

  const hasPrefix = Boolean(classPrefix);
  const sectionClass = hasPrefix ? `${classPrefix}-section` : "";
  const sectionTitleClass = hasPrefix ? `${classPrefix}-section-title` : "";
  const wrapperClass = hasPrefix ? `${classPrefix}-table-wrapper` : "";
  const tableClass = hasPrefix ? `${classPrefix}-table` : "";

  return (
    <section className={sectionClass}>
      {!!tituloSecao && <h2 className={sectionTitleClass}>{tituloSecao}</h2>}
      <div className={wrapperClass}>
        <table className={tableClass}>
          <thead>
            <tr>
              {titulos.map((titulo, index) => (
                <th key={index}>{titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((valor, idx) => (
                  <td key={idx}>{valor}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Tabela;
