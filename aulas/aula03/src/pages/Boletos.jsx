import Tabela from "../components/Tabela";
import Layout from "./Layout";
function Boletos() {
  const colunas = ["Vencimento", "Valor", "Situação"];
  const boletos = [
    { vencimento: "01/07/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/08/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/09/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/10/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/11/2024", valor: "R$ 500,00", situacao: "Pendente" },
  ];
  return (
    <Layout titulo="Meus boletos" subtitulo="Histórico de pagamento">
      <Tabela titulos={colunas} dados={boletos} />
    </Layout>
  );
}

export default Boletos;
