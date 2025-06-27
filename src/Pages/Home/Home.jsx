import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import "./Home.css";

const Home = () => {
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const { userLooged } = useAuthStore();
  const navigate = useNavigate();

  const handleQuizAccess = () => {
    if (userLooged) {
      navigate("/quiz");
    } else {
      setShowLoginAlert(true);
    }
  };

  return (
    <div className="container">
      <section className="main-section">
        <h1>Conoce tus Pulmones en 3D</h1>
        <p className="subtitle">El órgano vital que respira por ti</p>
        <p className="description">
          Descubre cómo funcionan tus pulmones, cómo se ven por dentro y qué los
          puede afectar.
        </p>
        <Link to="/explorar">
          <div className="info-link">¿Cómo funcionan los pulmones?</div>
        </Link>
        <h2 className="slide-hint">desliza 🢃</h2>
      </section>

      <section className="diseases-section" id="diseases">
        <h2>Enfermedades Pulmonares</h2>
        <div className="bento-grid">
          <Link to="/cancer-pulmonar" className="bento-item">
            <h3>CÁNCER PULMONAR</h3>
            <img src="/iconsHome/cancer.png" alt="Ícono cáncer pulmonar" />
            <button className="explore-btn">Explorar en 3D</button>
          </Link>

          <Link to="/fibrosis-pulmonar" className="bento-item">
            <h3>FIBROSIS PULMONAR</h3>
            <img src="/iconsHome/fibrosis.png" alt="Ícono fibrosis pulmonar" />
            <button className="explore-btn">Explorar en 3D</button>
          </Link>

          <Link to="/asma" className="bento-item">
            <h3>ASMA</h3>
            <img src="/iconsHome/asma.png" alt="Ícono asma" />
            <button className="explore-btn">Explorar en 3D</button>
          </Link>

          <Link to="/hipertension-pulmonar" className="bento-item">
            <h3>HIPERTENSIÓN PULMONAR</h3>
            <img
              src="/iconsHome/hipertension.png"
              alt="Ícono hipertensión pulmonar"
            />
            <button className="explore-btn">Explorar en 3D</button>
          </Link>
        </div>
      </section>

      <section className="quiz-section">
        <h2>¿LISTO PARA UN JUEGO 3D DE 5 PREGUNTAS?</h2>
        <p className="quiz-description">
          Responde preguntas interactivas sobre tus pulmones y demuestra cuánto
          sabes de una forma divertida.
        </p>
        <button className="quiz-btn" onClick={handleQuizAccess}>
          ¡Comenzar Juego!
        </button>
      </section>
      {showLoginAlert && (
        <div className="login-alert-backdrop">
          <div className="login-alert-modal">
            <h3>⚠ Inicia sesión para continuar</h3>
            <p>Debes iniciar sesión para jugar el quiz y guardar tu puntaje.</p>
            <button onClick={() => setShowLoginAlert(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
