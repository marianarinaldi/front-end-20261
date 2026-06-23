import "./Settings.css";

function Settings() {
  return (
    <>
      <header className="settings-header">
        <h1>Configurações</h1>
        <p className="settings-subtitle">Preferências da sua conta</p>
      </header>

      <section className="settings-container">
        <article className="settings-section">
          <h2>Preferências de Usuário</h2>

          <div className="settings-item">
            <div className="settings-label">
              <h3>Receber notificações por email</h3>
            </div>
            <button className="settings-toggle active" type="button" />
          </div>

          <div className="settings-item">
            <div className="settings-label">
              <h3>Notificações de notas</h3>
            </div>
            <button className="settings-toggle active" type="button" />
          </div>

          <div className="settings-item">
            <div className="settings-label">
              <h3>Notificações de boletos</h3>
            </div>
            <button className="settings-toggle active" type="button" />
          </div>

          <div className="settings-actions">
            <button className="btn btn-primary" type="button">
              Salvar Configurações
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Settings;
