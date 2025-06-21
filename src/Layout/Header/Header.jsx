import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router";

const Header = () => {
  const { loginGoogleWithPopUp, logout, userLooged } = useAuthStore(); // Obtiene el usuario y las funciones
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
      navigate("/"); // inicio de sesion después del login
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Opcional: redirige tras logout
  };

  return (
    <header className={`header-container${shrink ? " shrink" : ""}${menuOpen ? " menu-open" : ""}`}>
      <nav className={`navbar${shrink ? " shrink" : ""}${menuOpen ? " menu-open" : ""}`}>
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <img src="/Logo/JACO-LOGO-BLANCO.webp" className="logo-img" />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end onClick={handleLinkClick}>
              Inicio
            </NavLink>
          </li>

          <li className="dropdown">
            <div className="dropdown-link">Enfermedades</div>
            <ol className="dropdown-menu">
              <li>
                <NavLink to="/fibrosis-pulmonar" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
                  Fibrosis Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink to="/asma" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
                  Asma
                </NavLink>
              </li>
              <li>
                <NavLink to="/cancer-pulmonar" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
                  Cáncer Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink to="/hipertension-pulmonar" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
                  Hipertensión Pulmonar
                </NavLink>
              </li>
            </ol>
          </li>

          <li>
            <NavLink to="/quiz" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
              Quiz
            </NavLink>
          </li>

          <li>
            {userLooged ? (
              <button onClick={handleLogout} className="login-button">
                Cerrar Sesión
              </button>
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
