import CommitmentCard from '../../componentes/CommitmentCard/CommitmentCard';
import './Presentacion.css';

// ─── Datos: compromisos del estudiante ───────────────────────────────────────
const compromisos = [
  {
    numero: '01',
    descripcion: 'Aprender las bases de React y aprobar la materia con una nota alta.',
  },
  {
    numero: '02',
    descripcion: 'Escribir código organizado y seguir las instrucciones del docente.',
  },
  {
    numero: '03',
    descripcion: 'Ser creativos e innovadores al construir aplicaciones web.',
  },
];

// ─── Página 1: Presentación ───────────────────────────────────────────────────
const Presentacion = () => {
  return (
    <div className="pagina fade-in">

      {/* ── Hero: nombres e imagen ──────────────────────────────────────── */}
      <div className="hero">
        <div className="hero-texto">
          <p className="saludo">Hola 👋</p>

          {/* Nombres completos */}
          <h1 className="nombre">Jesus David Sanchez Abril</h1>
          <h1 className="nombre nombre-2">Abner Abdul Florez Moreno</h1>

          {/* Códigos de estudiante */}
          <div className="codigos">
            <span className="badge">Cód. 0192586</span>
            <span className="badge">Cód. 0192666</span>
          </div>

          <p className="profesion">🎓 Ingeniería de Sistemas — 3° Semestre</p>
          <p className="profesion">💻 Desarrollo de Aplicaciones Web</p>
        </div>

        <img src="./src/assets/Desarrollador.jpg" alt="Foto de perfil" className="avatar-img" />

      </div>

      {/* ── Sección: Compromisos ─────────────────────────────────────────── */}
      <h2 className="seccion-titulo">Mis Compromisos en la Materia</h2>
      <div className="cards-row">
        {compromisos.map((c) => (
          <CommitmentCard
            key={c.numero}
            numero={c.numero}
            descripcion={c.descripcion}
          />
        ))}
      </div>

    </div>
  );
};

export default Presentacion;
