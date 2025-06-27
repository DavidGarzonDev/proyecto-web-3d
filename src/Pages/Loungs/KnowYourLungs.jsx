import { useEffect, useRef, useState } from "react";
import "./KnowYourLongs.css";
import CanvasLoungKnow from "./content/CanvasLoungKnow";
import { FaChevronDown } from "react-icons/fa";

const KnowYourLungs = () => {
  const infoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY <= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToInfo = () => {
    if (infoRef.current) {
      const y = infoRef.current.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="lungs-hero">
        <div className="hero-text">
          <h1>TUS PULMONES</h1>
          <p>Conoce el órgano que hace posible cada respiro</p>
        </div>
        <div className="hero-3d">
          <CanvasLoungKnow />
        </div>
        {showButton && (
          <button className="scroll-down-btn" onClick={handleScrollToInfo} aria-label="Ver más información">
            <span>Explorar</span>
            <FaChevronDown size={24} />
          </button>
        )}
      </section>

      <section className="lungs-info" ref={infoRef}>
        <h2>¿Cómo funcionan tus pulmones?</h2>
        <p>
          Los pulmones trabajan gracias a un mecanismo llamado ventilación. Al inhalar, el diafragma se contrae y
          permite que el aire entre. Al exhalar, se relaja para liberar el dióxido de carbono. Además de oxigenar tu
          cuerpo, filtran partículas dañinas del aire, protegiendo tu salud día a día.
        </p>
      </section>

      <section className="lungs-curiosities">
        <div className="curiosities-header">
          <h2>Curiosidades</h2>
          <p>
            Descubre datos sorprendentes sobre este órgano vital. ¿Sabías que el pulmón derecho es más grande que el
            izquierdo? Pasa el mouse sobre las tarjetas para ver más información.
          </p>
        </div>

        <div className="kyl-grid">
          {curiosities.map((item, index) => (
            <div className="card-scroll" key={index}>
              <div className="card-rotation">
                <div className="card-inner">
                  <div className="card-curiosity-front">
                    <h3>{item.title}</h3>
                    <img src={item.imageSrc} alt={item.title} />
                  </div>
                  <div className="card-curiosity-back">
                    <h3>{item.backTitle}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default KnowYourLungs;

const curiosities = [
  {
    title: "Tamaño",
    imageSrc: "/curiosities/tamano.png",
    backTitle: "¿Lo sabías?",
    description: "Tus pulmones juntos pueden contener hasta 6 litros de aire, aunque solo usas una parte con cada respiración.",
  },
  {
    title: "Función doble",
    imageSrc: "/curiosities/funcion.png",
    backTitle: "Filtran el aire",
    description: "Además de oxigenar, los pulmones filtran impurezas del aire para protegerte de infecciones y contaminantes.",
  },
  {
    title: "Diferencias",
    imageSrc: "/curiosities/simetria.png",
    backTitle: "Asimétricos",
    description: "El pulmón derecho es más grande que el izquierdo, ya que el corazón ocupa parte del espacio izquierdo del tórax.",
  },
];