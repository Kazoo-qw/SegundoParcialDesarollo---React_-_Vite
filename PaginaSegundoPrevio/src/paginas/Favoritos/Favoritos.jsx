import { useState } from 'react';
import LearningCard from '../../componentes/LearningCard/LearningCard';
import './Favoritos.css';

// ─── Datos: cosas que me gustaría aprender ───────────────────────────────────
const APRENDER = [
  {
    imagen: 'https://www.educacionfutura.org/wp-content/uploads/2025/01/Imagen-IA.png',
    titulo: 'Inteligencia Artificial',
    descripcion:
      'Aprender más sobre modelos de IA, machine learning y automatización de procesos inteligentes.',
  },
  {
    imagen: 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/8f2d869f-3cb8-591f-b852-0a641a3b7a28/de99414e-64fa-540c-85ab-76362c0fde5c.jpg',
    titulo: 'Cloud Computing',
    descripcion:
      'Desplegar aplicaciones en la nube usando servicios modernos y escalables como AWS o Azure.',
  },
  {
    imagen: 'https://aecconsultoras.com/wp-content/uploads/2025/09/shutterstock_2366249997-scaled-1-1200x675.jpg',
    titulo: 'Ciberseguridad',
    descripcion:
      'Conocer técnicas de protección de datos, hacking ético y seguridad informática aplicada.',
  },
];

// ─── Página 3: Favoritos ──────────────────────────────────────────────────────
const Favoritos = () => {
  // useState: controla si la sección "¿Por qué nos gusta?" está visible o no
  const [mostrarPorQue, setMostrarPorQue] = useState(false);

  return (
    <div className="pagina fade-in">

      {/* ── Card: materia favorita ──────────────────────────────────────── */}
      <div className="favorito-card">
        <p className="favorito-label">⭐ Materia Favorita</p>
        <h1 className="favorito-titulo">Desarrollo de Aplicaciones Web</h1>
        <p className="favorito-desc">
          Esta materia nos gusta porque permite crear aplicaciones modernas,
          dinámicas e interactivas. Además, combina diseño, lógica y creatividad
          para construir soluciones reales.
        </p>

        {/* Botón que alterna la visibilidad usando useState */}
        <button
          className="btn-toggle"
          onClick={() => setMostrarPorQue(!mostrarPorQue)}
        >
          {mostrarPorQue ? '▲ Ocultar' : '▼ ¿Por qué nos gusta?'}
        </button>

        {/* Sección colapsable — solo se renderiza cuando mostrarPorQue es true */}
        {mostrarPorQue && (
          <div className="por-que">
            <p className="pq-texto">
              Nos interesa el desarrollo web porque constantemente aparecen nuevas
              tecnologías y herramientas. También nos gusta poder diseñar interfaces
              atractivas y mejorar la experiencia de los usuarios.
            </p>
          </div>
        )}
      </div>

      {/* ── Sección: Cosas que me gustaría aprender ─────────────────────── */}
      <h2 className="seccion-titulo">Cosas que me gustaría aprender</h2>
      <div className="cards-row">
        {APRENDER.map((item) => (
          <LearningCard
            key={item.titulo}
            imagen={item.imagen}
            titulo={item.titulo}
            descripcion={item.descripcion}
          />
        ))}
      </div>

    </div>
  );
};

export default Favoritos;
