import { Link } from 'react-router-dom'; // Asegúrate de usar 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <section className="main-section">
        <h1>Conoce tus Pulmones en 3D</h1>
        <p className="subtitle">El órgano clave para tu respiración</p>
        <p className="description">
          El pulmón es un órgano vital del sistema respiratorio encargado de intercambiar gases entre el aire y la sangre. Su principal función es absorber oxígeno y expulsar dióxido de carbono. Está formado por dos partes, el pulmón derecho y el izquierdo, y se encuentra protegido por la caja torácica. Su estructura es esponjosa y está compuesta por millones de alvéolos, donde ocurre el intercambio gaseoso.
        </p>
        <Link to="/explorar">
          <div className="info-link">Ver más información</div>
        </Link>
        
      </section>

      <section className="diseases-section" id="diseases">
        <h2>Enfermedades Pulmonares</h2>
        
        <div className="bento-grid">
          <Link to="/cancer-pulmonar" className="bento-item red-card">
            <h3>CANCER PULMONAR</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
          
          <Link to="/fibrosis-pulmonar" className="bento-item white-card">
            <h3>FIBROSIS PULMONAR</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
          
          <Link to="/asma" className="bento-item white-card">
            <h3>ASMA</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
          
          <Link to="/hipertension-pulmonar" className="bento-item red-card">
            <h3>HIPERTENSION PULMONAR</h3>
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
        </div>
      </section>

      <section className="quiz-section">
        <h2>¿LISTO PARA UN JUEGO 3D DE 5 PREGUNTAS?</h2>
        <p className="description">
          Pon a prueba tu conocimiento sobre los pulmones con este breve quiz interactivo. Responde 5 preguntas en un entorno 3D y demuestra cuánto has aprendido. ¡Es educativo y divertido!
        </p>
        <Link to="/quiz">
          <button className="quiz-btn">¡Comenzar Juego!</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
