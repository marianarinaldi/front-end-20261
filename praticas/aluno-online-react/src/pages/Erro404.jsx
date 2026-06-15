import { Link } from "react-router-dom";

function Erro404() {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "64px", margin: "0" }}>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>Desculpe, a página que você procura não existe.</p>
      <Link to="/" style={{ color: "var(--accent)", textDecoration: "none" }}>
        Voltar para Home
      </Link>
    </div>
  );
}

export default Erro404;
