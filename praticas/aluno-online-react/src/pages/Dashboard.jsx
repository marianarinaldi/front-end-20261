import Card from "../components/Card";
import "./Dashboard.css";

function Dashboard() {
  const avisos = ["Eleição para representante", "Participe do IESB-SE"];
  const datas = [
    "01/07 - Fim do semestre",
    "15/07 - Início do próximo semestre",
    "20/07 - Fim do período de matrícula",
  ];
  const disciplinas = [
    "Programação Web",
    "Banco de Dados",
    "Engenharia de Software",
  ];

  return (
    <>
      <header className="dashboard-header">
        <h1>Olá, Aluno</h1>
        <p>Bem-vindo ao portal do aluno</p>
      </header>

      <section className="dashboard-grid">
        <Card titulo="Mural de Avisos" items={avisos} />
        <Card titulo="Calendário Acadêmico" items={datas} />
        <Card titulo="Minhas disciplinas" items={disciplinas} />
      </section>
    </>
  );
}

export default Dashboard;
