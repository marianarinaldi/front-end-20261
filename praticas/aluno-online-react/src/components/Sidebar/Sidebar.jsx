import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#notas">Notas</a>
          </li>
          <li>
            <a href="#faltas">Faltas</a>
          </li>
          <li>
            <a href="#boletos">Boletos</a>
          </li>
          <li>
            <a href="#requerimentos">Requerimentos</a>
          </li>
          <li>
            <a href="#sair">Sair</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
