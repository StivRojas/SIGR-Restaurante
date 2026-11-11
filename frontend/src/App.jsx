import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Reservas from "./pages/Reservas.jsx";
import Pedidos from "./pages/Pedidos";
import Reportes from "./pages/Reportes";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/reservas"
          element={<Reservas />}
        />

        <Route
          path="/pedidos"
          element={<Pedidos />}
        />

        <Route
          path="/reportes"
          element={<Reportes />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;