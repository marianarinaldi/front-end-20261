import Tabela from "../components/Tabela";
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
    <>
      <header className="boletos-header">
        <div>
          <h1>Meus boletos</h1>
          <p className="boletos-subtitle">Histórico de pagamento</p>
        </div>
      </header>

      <section className="boletos-container">
        <Tabela
          titulos={boletosColunas}
          dados={boletosData}
          classPrefix="boletos"
          tituloSecao="Mensalidades"
        />
      </section>
    </>
  );
}

export default Boletos;
