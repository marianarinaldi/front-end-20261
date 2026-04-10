function Tabela({ titulos, dados }) {
  return (
    <table>
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
  );
}

export default Tabela;
