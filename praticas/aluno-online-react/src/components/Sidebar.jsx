const MENU_ITEMS = [
  { id: 1, label: "Dashboard", icon: "📊" },
  { id: 2, label: "Notas", icon: "📝" },
  { id: 3, label: "Faltas", icon: "⏰" },
  { id: 4, label: "Boletos", icon: "💳" },
  { id: 5, label: "Requerimentos", icon: "📋" },
  { id: 6, label: "Sair", icon: "🚪" },
];

function Sidebar() {
  return (
    <aside>
      <h2>Menu</h2>
      <nav>
        <ul>
          {MENU_ITEMS.map((item) => (
            <li key={item.id}>
              <a href="#">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p>
        © 2026 IESB
        <br />
        Portal do Aluno
      </p>
    </aside>
  );
}

export default Sidebar;
