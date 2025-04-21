import { Link } from 'react-router';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <section className="main-section">
        <h1>Conoce tus Pulmones en 3D</h1>
        <p className="subtitle">El órgano clave para tu respiración</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quandit dictum nugua eget ligula sollicitudin non ultrices ipsum dique.
          Nam dictum est vibed, enem sodales patillum.
        </p>
        <Link to="/explorar">
          <a className="info-link">Ver más información</a>
        </Link>
        
      </section>

      <section className="diseases-section">
        <h2>Enfermedades Pulmonares</h2>
        
        <div className="bento-grid">
          <Link to="/enfermedades/cancer-pulmonar" className="bento-item bento-item-0 red-card">
            <h3>CANCER PULMONAR</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
          
          
          <Link to="/enfermedades/fibrosis-pulmonar" className="bento-item bento-item-1 white-card">
            <h3>FIBROSIS PULMONAR</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
          
          
          <Link to="/enfermedades/asma" className="bento-item bento-item-2 white-card">
            <h3>ASMA</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
          
          
          <Link to="/enfermedades/hipertension-pulmonar" className="bento-item bento-item-3 red-card">
            <h3>HIPERTENSION PULMONAR</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>

        </div>
      </section>
      <section className="quiz-section">
        <h2>¿ESTÁS LISTO PARA UN PEQUEÑO QUIZ?</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quandit dictum nugua eget ligula sollicitudin non ultrices ipsum dique.
          Nam dictum est vibed, enem sodales patillum.
        </p>
        <Link to="/quiz">
        <button className="quiz-btn">PONTE A PRUEBA</button>
        </Link>
        
      </section>
      
      
    </div>
  );
}

export default Home;