import "./Menu.css";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function Menu() {
  const { logout, usuario } = useAuthContext();

  const handleSair = () => {
    logout();
  };

  return (
    <nav>
      <h4>{usuario.nome}</h4>
      <h5>{usuario.email}</h5>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/perfil/${usuario.id}`}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Notas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faltas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Faltas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/boletos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Boletos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/requerimentos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Requerimentos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Configurações
          </NavLink>
        </li>
        <li>
          <Link to="/login" onClick={handleSair}>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
