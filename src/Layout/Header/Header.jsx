import { Link } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src="/Logo/JACO-LOGO-BLANCO.webp" className="logo-img" />
        </Link>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li className="dropdown">
            <span className="dropdown-link">Enfermedades</span>
            <ol className="dropdown-menu">
              <li>
                <Link to="/enfermedades/fibrosis-pulmonar">
                  Fibrosis Pulmonar
                </Link>
              </li>
              <li>
                <Link to="/enfermedades/asma">Asma</Link>
              </li>
              <li>
                <Link to="/enfermedades/cancer-pulmonar">Cancer Pulmonar</Link>
              </li>

              <li>
                <Link to="/enfermedades/hipertension-pulmonar">
                  Hipertension Pulmonar
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
