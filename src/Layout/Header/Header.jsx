import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`header-container${shrink ? ' shrink' : ''}`}>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src="/Logo/JACO-LOGO-BLANCO.webp" className="logo-img" />
        </Link>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>
              Inicio
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink to="/enfermedades" className={({isActive}) => isActive ? 'dropdown-link active' : 'dropdown-link'} end>
              Enfermedades
            </NavLink>
            <ol className="dropdown-menu">
              <li>
                <NavLink to="/enfermedades/fibrosis-pulmonar" className={({isActive}) => isActive ? 'active' : ''}>
                  Fibrosis Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink to="/enfermedades/asma" className={({isActive}) => isActive ? 'active' : ''}>
                  Asma
                </NavLink>
              </li>
              <li>
                <NavLink to="/enfermedades/cancer-pulmonar" className={({isActive}) => isActive ? 'active' : ''}>
                  Cancer Pulmonar
                </NavLink>
              </li>
              <li>
                <NavLink to="/enfermedades/hipertension-pulmonar" className={({isActive}) => isActive ? 'active' : ''}>
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
