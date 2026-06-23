import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Faltas() {
  const faltasColunas = ["Disciplina", "Faltas", "Limite"];
  const faltasData = {
    2024.1: [
      { disciplina: "BI e Data Warehousing", faltas: 2, limite: 10 },
      { disciplina: "Construção de Frontend", faltas: 1, limite: 10 },
      { disciplina: "Manutenção de Software e Devops", faltas: 0, limite: 10 },
    ],
    2024.2: [
      { disciplina: "BI e Data Warehousing", faltas: 3, limite: 10 },
      { disciplina: "Construção de Frontend", faltas: 2, limite: 10 },
      { disciplina: "Manutenção de Software e Devops", faltas: 1, limite: 10 },
    ],
    2025.1: [
      { disciplina: "BI e Data Warehousing", faltas: 1, limite: 10 },
      { disciplina: "Construção de Frontend", faltas: 0, limite: 10 },
      { disciplina: "Manutenção de Software e Devops", faltas: 0, limite: 10 },
    ],
  };

  return (
    <Layout titulo="Minhas faltas" subtitulo="Histórico de faltas por semestre">
      <Tabela titulos={faltasColunas} dados={faltasData[2024.1]} />
      <Tabela titulos={faltasColunas} dados={faltasData[2024.2]} />
      <Tabela titulos={faltasColunas} dados={faltasData[2025.1]} />
    </Layout>
  );
}

export default Faltas;
