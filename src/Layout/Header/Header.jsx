import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

const Header = () => {

  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`header-container${shrink ? ' shrink' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src="/Logo/JACO-LOGO-BLANCO.webp" className="logo-img" />
        </Link>
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>
              Inicio
            </NavLink>
          </li>
          <li className="dropdown">
            <div className={({isActive}) => isActive ? 'dropdown-link active' : 'dropdown-link'} end>
              Enfermedades
            </div>
            <ol className="dropdown-menu">
              <li>
                <NavLink to="/fibrosis-pulmonar" className={({isActive}) => isActive ? 'active' : ''}>
                  Fibrosis Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink to="/asma" className={({isActive}) => isActive ? 'active' : ''}>
                  Asma
                </NavLink>
              </li>
              <li>
                <NavLink to="/cancer-pulmonar" className={({isActive}) => isActive ? 'active' : ''}>
                  Cancer Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink to="/hipertension-pulmonar" className={({isActive}) => isActive ? 'active' : ''}>
                  Hipertension Pulmonar
                </NavLink>
              </li>
            </ol>
          </li>
          <li>
            <NavLink to="/quiz" className={({isActive}) => isActive ? 'active' : ''}>
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
