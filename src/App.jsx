import React from "react";
import { Routes, Route, NavLink } from 'react-router-dom'; // Importa NavLink correctamente
import { Header } from './estilos-componentes/style-component';
// import dataCelu from "./data/dataCelu";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Celulares from "./components/Celulares";
import CelularDetails from "./components/CelularDeatils";

function App() {
  return (
    <div>
      <Header>
        <h1>Andrew's Store</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink> {/* Usa NavLink en lugar de NL */}
            </li>
            <li>
              <NavLink to="/search-page">Pagina de Busqueda</NavLink> {/* Usa NavLink en lugar de NL */}
            </li>
          </ul>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />

        <Route path="/celulares/:nameCelular" element={<Celulares />}>
          <Route path="details" element={<CelularDetails />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
