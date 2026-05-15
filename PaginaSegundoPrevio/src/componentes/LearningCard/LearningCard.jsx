import { useState } from 'react';
import './LearningCard.css';

// ─── Componente: LearningCard ─────────────────────────────────────────────────
// Muestra una card con imagen, título y descripción.
// Incluye efecto hover interactivo manejado con useState.
//
// Props:
//   imagen      → URL de la imagen (null muestra un placeholder)
//   titulo      → título del tema que se quiere aprender
//   descripcion → texto descriptivo del tema
const LearningCard = ({ imagen, titulo, descripcion }) => {
  // useState controla el efecto visual al pasar el mouse
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card ${hovered ? 'card-hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Imagen o placeholder ─────────────────────────────────────────── */}
      <div className="card-imagen-wrapper">
        {imagen ? (
          // Imagen real cuando la prop tiene una ruta válida
          <img src={imagen} alt={titulo} className="card-imagen" />
        ) : (
          // Placeholder cuando no se ha definido la imagen
          <div className="card-imagen-placeholder">
            <span>📷 Agrega tu imagen aquí</span>
          </div>
        )}
      </div>

      {/* Título */}
      {titulo && <h3 className="card-titulo">{titulo}</h3>}

      {/* Descripción */}
      {descripcion && <p className="card-descripcion">{descripcion}</p>}
    </div>
  );
};

export default LearningCard;
