import { Link } from "react-router";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Link to="/" className="logo-link">
        <img src="/Logo/JACO-LOGO-ROJO.webp" className="footer-logo" />
      </Link>

      <div className="footer-content">
        <p>
          LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NULLAM
          HENDRERIT MAGNA ELEMENTUM DUI MAXIMUS LACINIA. SED LUCTUS EX IPSUM.
        </p>
      </div>

      <div className="footer-contact">
        <p>
          <b>Teléfono:</b> +57 (123) 123 - 1234
        </p>
        <p>
          <b>Correo Eléctronico:</b> ejemplo@gmail.com
        </p>
        <p>Cali, Valle del Cauca, Yumbo</p>
      </div>

      <div className="separator">
        <a className="copyright">
          Todos los derechos reservados &copy; Develop by JACO SOFTWARE
        </a>
      </div>
    </footer>
  );
};

export default Footer;
