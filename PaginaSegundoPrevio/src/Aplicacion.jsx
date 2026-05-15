import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Aplicacion.css';

import Navbar       from './componentes/Navbar/Navbar';
import Presentacion from './paginas/Presentacion/Presentacion';
import Materias     from './paginas/Materias/Materias';
import Favoritos    from './paginas/Favoritos/Favoritos';

const Aplicacion = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/"          element={<Presentacion />} />
          <Route path="/materias"  element={<Materias />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Aplicacion;