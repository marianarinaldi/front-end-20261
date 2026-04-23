import Tabela from "../components/Tabela";
import Layout from "./Layout";
import "./Boletos.css";

function Boletos() {
  const boletosData = [
    { vencimento: "01/07/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/08/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/09/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/10/2024", valor: "R$ 500,00", situacao: "Pendente" },
    { vencimento: "01/11/2024", valor: "R$ 500,00", situacao: "Pendente" },
  ];

  const boletosColunas = ["Vencimento", "Valor R$", "Situação"];

  return (
    <Layout titulo="Meus boletos" subtitulo="Histórico de pagamento">
      <Tabela titulos={boletosColunas} dados={boletosData} />
    </Layout>
  );
}

export default Boletos;
