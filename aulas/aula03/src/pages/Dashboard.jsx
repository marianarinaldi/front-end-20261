import Layout from "./Layout";

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
    <Layout titulo="Olá, ALuno" subtitulo="Seja bem-vindo ao portal do aluno">
      <Card titulo="Mural de Avisos" items={avisos} />
      <Card titulo="Calendário Academico" items={datas} />
      <Card titulo="Minhas diciplinas" items={disciplinas} />
    </Layout>
  );
}

export default Dashboard;
