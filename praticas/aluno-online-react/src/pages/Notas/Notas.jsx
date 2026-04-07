import "./Notas.css";

function Notas() {
  return (
    <div className="notas">
      <div className="notas-header">
        <h1>Minhas Notas</h1>
        <img src="/user-circle.svg" alt="Avatar do usuário" />
      </div>
      <div className="notas-subtitle">Histórico de Notas por Semestre</div>
      <div className="notas-table-group">
        <div className="notas-table-block">
          <div className="notas-table-title">2026.1</div>
          <table className="notas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
              <tr>
                <td>Manutenção de Software e Devops</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="notas-table-block">
          <div className="notas-table-title">2025.2</div>
          <table className="notas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>5.4</td>
                <td>6.2</td>
                <td></td>
                <td>MM</td>
              </tr>
              <tr>
                <td>Estrutura de Dados</td>
                <td>6.3</td>
                <td>6.1</td>
                <td></td>
                <td>MM</td>
              </tr>
              <tr>
                <td>Gerenciamento de Projetos</td>
                <td>7.4</td>
                <td>7.1</td>
                <td></td>
                <td>MS</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="notas-table-block">
          <div className="notas-table-title">2025.1</div>
          <table className="notas-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notas;
