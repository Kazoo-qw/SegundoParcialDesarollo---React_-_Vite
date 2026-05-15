import { useState } from 'react';
import './CommitmentCard.css';

// ─── Componente: CommitmentCard ───────────────────────────────────────────────
// Muestra una card numérica con efecto hover interactivo.
//
// Props:
//   numero      → número grande que identifica el compromiso (ej: "01")
//   descripcion → texto que describe el compromiso
const CommitmentCard = ({ numero, descripcion }) => {
  // useState controla el efecto visual al pasar el mouse
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card ${hovered ? 'card-hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Número identificador */}
      {numero && <div className="card-numero">{numero}</div>}

      {/* Texto del compromiso */}
      {descripcion && <p className="card-descripcion">{descripcion}</p>}
    </div>
  );
};

export default CommitmentCard;
