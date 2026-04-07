import "./Faltas.css";

function Faltas() {
  return (
    <div className="faltas">
      <div className="faltas-header">
        <h1>Minhas Faltas</h1>
        <img src="/user-circle.svg" alt="Avatar do usuário" />
      </div>
      <div className="faltas-subtitle">Histórico de Faltas por Semestre</div>
      <div className="faltas-table-group">
        <div className="faltas-table-block">
          <div className="faltas-table-title">2026.1</div>
          <table className="faltas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Manutenção de Software e Devops</td>
                <td>0</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="faltas-table-block">
          <div className="faltas-table-title">2025.2</div>
          <table className="faltas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>27</td>
                <td>87.5%</td>
              </tr>
              <tr>
                <td>Estrutura de Dados</td>
                <td>9</td>
                <td>85%</td>
              </tr>
              <tr>
                <td>Gerenciamento de Projetos</td>
                <td>10.5</td>
                <td>82.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="faltas-table-block">
          <div className="faltas-table-title">2025.1</div>
          <table className="faltas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Faltas;
