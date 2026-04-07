import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <section>
        <h2>Bem-vindo ao portal do aluno</h2>
        <article id="dashboard">
          <header>
            <h2>Mural de Avisos</h2>
          </header>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante da turma</li>
          </ul>
        </article>
        <article id="calendario">
          <header>
            <h2>Calendário Acadêmico</h2>
          </header>
          <ul>
            <li>23/02 - Início do período letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </article>
        <article id="disciplinas">
          <header>
            <h2>Minhas Disciplinas</h2>
          </header>
          <ul>
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
            <li>Banco de Dados</li>
            <li>UX/UI Design</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;
