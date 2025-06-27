import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import "./Header.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";
import { saveUserToFirestore } from "./saveUser";

const Header = () => {
  const { loginGoogleWithPopUp, logout, userLooged } = useAuthStore();
  const navigate = useNavigate();

  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleLogin = async () => {
    const result = await loginGoogleWithPopUp();
    if (result && result.user) {
      await saveUserToFirestore(result.user);
      navigate("/");
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header
      className={`header-container${shrink ? " shrink" : ""}${
        menuOpen ? " menu-open" : ""
      }`}
    >
      <nav
        className={`navbar${shrink ? " shrink" : ""}${
          menuOpen ? " menu-open" : ""
        }`}
      >
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <img src="/Logo/JACO-LOGO-BLANCO.webp" className="logo-img" />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
              onClick={handleLinkClick}
            >
              Inicio
            </NavLink>
          </li>

          <li className="dropdown">
            <div className="dropdown-link">Enfermedades</div>
            <ol className="dropdown-menu">
              <li>
                <NavLink
                  to="/fibrosis-pulmonar"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleLinkClick}
                >
                  Fibrosis Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/asma"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleLinkClick}
                >
                  Asma
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cancer-pulmonar"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleLinkClick}
                >
                  Cáncer Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hipertension-pulmonar"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={handleLinkClick}
                >
                  Hipertensión Pulmonar
                </NavLink>
              </li>
            </ol>
          </li>

          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              Quiz
            </NavLink>
          </li>

          <li className="user-auth-section">
            {userLooged ? (
              <>
                <div className="user-name-button">
                  <FiUser className="user-icon" />
                  <span>{userLooged.displayName}</span>
                </div>
                <button onClick={handleLogout} className="login-button">
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <button onClick={handleLogin} className="login-button">
                Inicia Sesión
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
