import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
// import useAuthContext from "../contexts/useAuthContext";
import "./Layout.css";

function Layout() {
  // const { logado } = useAuthContext();

  // if (!logado) {
  //   return <Navigate to="/login" replace />;
  // }

  return (
    <div className="app-layout">
      <aside className="app-layout__sidebar">
        <Menu />
      </aside>
      <main className="app-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
