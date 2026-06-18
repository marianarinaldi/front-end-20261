import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Perfil from "./pages/Perfil";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Erro404 from "./pages/Erro404";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
        <Route path="perfil/:id" element={<Perfil />} />
        <Route path="about" element={<About />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
