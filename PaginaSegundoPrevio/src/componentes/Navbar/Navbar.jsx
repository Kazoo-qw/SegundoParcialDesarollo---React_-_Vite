import { NavLink } from 'react-router-dom';
import './Navbar.css';

// ─── Componente: Navbar ───────────────────────────────────────────────────────
// Visible en todas las páginas gracias a Aplicación.jsx.
// Usa NavLink de React Router para resaltar automáticamente la ruta activa.
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* ── LOGO ─────────────────────────────────────────────────────────── */}
      {/* Opción A — emoji de placeholder (por defecto): */}
      <div className="navbar-logo">🐦‍🔥</div>
      {/* Opción B — imagen real: reemplaza el div de arriba por:            */}
      {/* <img src="/images/logo.png" alt="Logo" className="logo-img" />     */}

      {/* ── Links de navegación ──────────────────────────────────────────── */}
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
