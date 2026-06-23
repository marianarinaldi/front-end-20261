import Tabela from "../components/Tabela";
import "./Faltas.css";

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
    <>
      <header className="faltas-header">
        <div>
          <h1>Minhas faltas</h1>
          <p className="faltas-subtitle">Histórico de faltas por semestre</p>
        </div>
      </header>

      <section className="faltas-container">
        <Tabela
          titulos={faltasColunas}
          dados={faltasData[2024.1]}
          classPrefix="faltas"
          tituloSecao="2024.1"
        />
        <Tabela
          titulos={faltasColunas}
          dados={faltasData[2024.2]}
          classPrefix="faltas"
          tituloSecao="2024.2"
        />
        <Tabela
          titulos={faltasColunas}
          dados={faltasData[2025.1]}
          classPrefix="faltas"
          tituloSecao="2025.1"
        />
      </section>
    </>
  );
}

export default Faltas;
