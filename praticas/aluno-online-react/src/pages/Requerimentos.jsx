import Tabela from "../components/Tabela";
import Layout from "./Layout";

function Requerimentos() {
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
    <Layout
      titulo="Meus requerimentos"
      subtitulo="Faça solicitações online para a secretaria"
    >
      <Tabela titulos={requerimentosColunas} dados={requerimentosData} />
    </Layout>
  );
}

export default Requerimentos;
