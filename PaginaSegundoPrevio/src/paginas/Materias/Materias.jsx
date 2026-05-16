import { useState } from 'react';
import './Materias.css';

//  Datos: materias de la carrera 
const MATERIAS = {
  'Diseño web y sistemas operativos': {
    nombre: 'Diseño web y sistemas operativos',
    descripcion:
      'Aprende los fundamentos del diseño visual para la web y el funcionamiento de los sistemas operativos modernos. Se trabajan conceptos como UI/UX, layouts responsivos, gestión de procesos y memoria.',
  },
  'Desarrollo de aplicaciones web': {
    nombre: 'Desarrollo de aplicaciones web',
    descripcion:
      'Materia enfocada en la creación de aplicaciones web modernas usando React, JavaScript y CSS. Se desarrollan proyectos reales que combinan lógica, diseño y experiencia de usuario.',
  },
  'Gestion de base de datos': {
    nombre: 'Gestion de base de datos',
    descripcion:
      'Estudio del modelado, diseño y administración de bases de datos relacionales. Se trabajan consultas SQL, normalización, índices y conexión con aplicaciones web.',
  },
  'Inteligencia artificial': {
    nombre: 'Inteligencia artificial',
    descripcion:
      'Introducción a algoritmos de aprendizaje automático, redes neuronales y procesamiento de lenguaje natural. Se exploran herramientas como Python y TensorFlow.',
  },
};

//  Página 2: Materias 
const Materias = () => {
  // useState: controla cuál materia está seleccionada en la lista lateral
  const [seleccionada, setSeleccionada] = useState('Diseño web y sistemas operativos');

  return (
    <div className="pagina fade-in">
      <div className="materias-container">

        {/*  Lista lateral de materias  */}
        <ul className="lista-materias">
          {Object.keys(MATERIAS).map((key) => (
            <li
              key={key}
              className={seleccionada === key ? 'activo' : ''}
              onClick={() => setSeleccionada(key)}
            >
              <span className="mat-bullet">▶</span>
              {key}
            </li>
          ))}
        </ul>

        {/*  Panel de detalle: cambia dinámicamente al hacer clic  */}
        <div className="descripcion-materia">
          <h2 className="materia-nombre">{MATERIAS[seleccionada].nombre}</h2>
          <div className="materia-divider" />
          <p className="materia-desc">{MATERIAS[seleccionada].descripcion}</p>
        </div>

      </div>
    </div>
  );
};

export default Materias;
