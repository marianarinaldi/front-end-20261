import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Faltas() {
  return (
    <Layout titulo="Minhas faltas" subtitulo="Histórico de faltas">
      <Tabela />
      <Tabela />
      <Tabela />
    </Layout>
  );
}

export default Faltas;
