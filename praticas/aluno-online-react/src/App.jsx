import Boletos from "./pages/Boletos";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const page = 6;
  return (
    <>
      {page == 1 && <Dashboard />}
      {page == 2 && <Notas />}
      {page == 3 && <Faltas />}
      {page == 4 && <Boletos />}
      {page == 5 && <Requerimentos />}
      {page == 6 && <Login />}
    </>
  );
}

export default App;
