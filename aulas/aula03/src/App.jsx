import Boletos from "./pages/Boletos";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import Dashboard from "./pages/Dashboard";

function App() {
  const page = 1;
  return (
    <>
      {page == 1 && <Dashboard />}
      {page == 2 && <Notas />}
      {page == 3 && <Faltas />}
      {page == 4 && <Boletos />}
      {page == 5 && <Requerimentos />}
    </>
  );
}

export default App;
