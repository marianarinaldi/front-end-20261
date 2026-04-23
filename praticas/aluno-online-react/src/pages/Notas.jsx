import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Notas() {
  const colunas = ["Disciplina", "A1", "A2", "A3", "Menção"];
  const data = {
    2026.1: [
      {
        disciplina: "BI e Data Warehousing",
        a1: "",
        a2: "",
        a3: "",
        mencao: "SR",
      },
      {
        disciplina: "Construção de Frontend",
        a1: "",
        a2: "",
        a3: "",
        mencao: "SR",
      },
      {
        disciplina: "Manutenção de Software e Devops",
        a1: "",
        a2: "",
        a3: "",
        mencao: "SR",
      },
    ],
    2025.2: [
      { disciplina: "BI e Data Warehousing", a1: 6, a2: 5, a3: 7, mencao: "C" },
      {
        disciplina: "Construção de Frontend",
        a1: 8,
        a2: 7,
        a3: 6,
        mencao: "C",
      },
      {
        disciplina: "Manutenção de Software e Devops",
        a1: 5,
        a2: 6,
        a3: 8,
        mencao: "C",
      },
    ],
    2025.1: [
      { disciplina: "BI e Data Warehousing", a1: 9, a2: 8, a3: 7, mencao: "B" },
      {
        disciplina: "Construção de Frontend",
        a1: 7,
        a2: 9,
        a3: 8,
        mencao: "B",
      },
      {
        disciplina: "Manutenção de Software e Devops",
        a1: 8,
        a2: 7,
        a3: 9,
        mencao: "B",
      },
    ],
  };
  return (
    <Layout titulo="Minhas notas" subtitulo="Historico de notas por semestre">
      <Tabela titulos={colunas} dados={data[2026.1]} />
      <Tabela titulos={colunas} dados={data[2025.2]} />
      <Tabela titulos={colunas} dados={data[2025.1]} />
    </Layout>
  );
}

export default Notas;
