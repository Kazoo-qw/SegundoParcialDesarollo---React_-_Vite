import { NavLink } from 'react-router-dom';
import './Navbar.css';

//  Componente: Navbar
// Visible en todas las páginas gracias a Aplicación.jsx.
// Usa NavLink de React Router cambia la URL sin recargar a esto se le llama Single Page Application.
const Navbar = () => {
  return (
    <nav className="navbar">
      {/*  LOGO  */}
      <div className="navbar-logo">🐦‍🔥</div>

      {/*  Links de navegación  */}
      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'nav-link activo-nav' : 'nav-link'}
        >
          Presentacion
        </NavLink>

        <NavLink
          to="/materias"
          className={({ isActive }) => isActive ? 'nav-link activo-nav' : 'nav-link'}
        >
          Materias
        </NavLink>

        <NavLink
          to="/favoritos"
          className={({ isActive }) => isActive ? 'nav-link activo-nav' : 'nav-link'}
        >
          Favoritos
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
