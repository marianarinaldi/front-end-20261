import "./About.css";

function About() {
  return (
    <>
      <header className="about-header">
        <h1>Sobre o Aluno Online</h1>
        <p className="about-subtitle">Informações sobre a plataforma</p>
      </header>

      <section className="about-container">
        <article className="about-section">
          <h2>🎯 Objetivo</h2>
          <p>
            O Aluno Online é uma plataforma de gerenciamento acadêmico que
            permite aos alunos acompanhar seu desempenho, visualizar notas,
            faltas, boletos e fazer requerimentos de forma prática e segura.
          </p>
        </article>

        <article className="about-section">
          <h2>🚀 Versão</h2>
          <p>1.0.0</p>
        </article>
      </section>
    </>
  );
}

export default About;
