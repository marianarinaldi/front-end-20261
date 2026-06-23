import { Link } from "react-router-dom";
import "./Erro404.css";

function Erro404() {
  return (
    <div className="erro404-container">
      <div className="erro404-card">
        <div className="erro404-icon">🚫</div>
        <h1 className="erro404-code">404</h1>
        <h2 className="erro404-title">Página Não Encontrada</h2>
        <p className="erro404-message">
          Desculpe, a página que você procura não existe.
        </p>
        <div className="erro404-actions">
          <Link to="/" className="erro404-button">
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Erro404;
