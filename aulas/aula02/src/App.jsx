import "./App.css";
import logo from "./assets/learn.svg";

function Cabecalho() {
  return (
    <header>
      <h1>Aluno Online</h1>
    </header>
  );
}

function Form() {
  return <form></form>;
}
function App() {
  {
    //<div>
    //  <Cabecalho />
    //  <div>{2 + 2}</div>
    //  <img src={logo} alt="" />
    //  <p></p>
    //</div>
  }
  return (
    <main>
      <img src={logo} alt="Logo" />
      <Cabecalho />
      <label htmlFor="matricula">Matrícula:</label>
      <input type="number" id="matricula" />
      <p id="matricula-error"></p>
      <label htmlFor="password">Senha:</label>
      <input type="password" id="password" />
      <p id="password-error"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;
