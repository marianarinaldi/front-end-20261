import Tabela from "../components/Tabela";
import "./Requerimentos.css";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { listarRequerimentos } from "../services/requerimentoService";

function Requerimentos() {
  const location = useLocation();
  const exibirFormulario = location.pathname.endsWith("/novo");
  const [requerimentosData, setRequerimentosData] = useState([]);
  const [erroLista, setErroLista] = useState("");

  const requerimentosColunas = [
    "Tipo de Requerimento",
    "Data de Solicitação",
    "Situação",
  ];

  useEffect(() => {
    const carregarRequerimentos = async () => {
      try {
        const dados = await listarRequerimentos();
        setRequerimentosData(dados);
        setErroLista("");
      } catch (erro) {
        if (erro?.status === 401) {
          return;
        }

        setErroLista("Não foi possível carregar os requerimentos.");
      }
    };

    carregarRequerimentos();
  }, []);

  const adicionarRequerimentoNaLista = (novoRequerimento) => {
    setRequerimentosData((listaAtual) => [...listaAtual, novoRequerimento]);
  };

  const dadosTabela = requerimentosData.map((requerimento) => ({
    tipo: requerimento.tipo,
    data: requerimento.data,
    status: requerimento.status,
  }));

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
        <Outlet context={{ adicionarRequerimentoNaLista }} />
      ) : (
        <section className="requerimentos-container">
          {erroLista && <p className="requerimentos-error">{erroLista}</p>}
          <Tabela
            titulos={requerimentosColunas}
            dados={dadosTabela}
            classPrefix="requerimentos"
            tituloSecao="Solicitações"
          />
        </section>
      )}
    </>
  );
}

export default Requerimentos;
