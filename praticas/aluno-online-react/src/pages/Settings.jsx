function Settings() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Configurações</h1>
      <div style={{ marginTop: "20px" }}>
        <h2>Preferências de Usuário</h2>
        <p>Aqui você pode configurar suas preferências pessoais.</p>

        <div style={{ marginTop: "15px" }}>
          <label>
            <input type="checkbox" defaultChecked /> Receber notificações por
            email
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            <input type="checkbox" defaultChecked /> Notificações de notas
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            <input type="checkbox" defaultChecked /> Notificações de boletos
          </label>
        </div>

        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          Salvar Configurações
        </button>
      </div>
    </div>
  );
}

export default Settings;
