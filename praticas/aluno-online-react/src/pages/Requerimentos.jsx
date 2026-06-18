import Tabela from "../components/Tabela";
import "./Requerimentos.css";
import { Link, Outlet, useLocation } from "react-router-dom";

function Requerimentos() {
  const location = useLocation();
  const exibirFormulario = location.pathname.endsWith("/novo");

  const requerimentosColunas = [
    "Tipo de Requerimento",
    "Data de Solicitação",
    "Situação",
  ];
  const requerimentosData = [
    { tipo: "Certificado", data: "15/05/2024", status: "Indeferido" },
    { tipo: "Histórico Escolar", data: "10/06/2024", status: "Deferido" },
    { tipo: "Dispensa de Disciplina", data: "20/06/2024", status: "Pendente" },
    {
      tipo: "Transferência de Créditos",
      data: "05/07/2024",
      status: "Indeferido",
    },
    { tipo: "Extensão de Prazo", data: "12/07/2024", status: "Pendente" },
  ];

  return (
    <>
      <header className="requerimentos-header">
        <div>
          <h1>Meus requerimentos</h1>
          <p className="requerimentos-subtitle">
            Faça solicitações online para a secretaria
          </p>
        </div>

        {!exibirFormulario && (
          <Link to="novo" className="requerimentos-new-button">
            ➕ Novo Requerimento
          </Link>
        )}
      </header>

      {exibirFormulario ? (
        <Outlet />
      ) : (
        <section className="requerimentos-container">
          <Tabela
            titulos={requerimentosColunas}
            dados={requerimentosData}
            classPrefix="requerimentos"
            tituloSecao="Solicitações"
          />
        </section>
      )}
    </>
  );
}

export default Requerimentos;
