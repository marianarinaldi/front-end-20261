import "./Menu.css";
import { Link, NavLink } from "react-router-dom";
import useAuthContext from "../contexts/useAuthContext";

function Menu() {
  const { logout, usuario } = useAuthContext();
  const nomeUsuario = usuario?.nome ?? "Aluno(a)";
  const emailUsuario = usuario?.email ?? "sem-email@iesb.edu.br";
  const idUsuario = usuario?.id ?? "0";

  const handleSair = () => {
    logout();
  };

  return (
    <nav className="menu">
      <h4>{nomeUsuario}</h4>
      <h5>{emailUsuario}</h5>
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
            to={`/perfil/${idUsuario}`}
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
          <Link to="/login" onClick={handleSair} replace>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
