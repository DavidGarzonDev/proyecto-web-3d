import { useEffect, useRef, useState } from "react";
import "./KnowYourLongs.css";
import CanvasLoungKnow from "./content/CanvasLoungKnow";
import { FaChevronDown } from "react-icons/fa";
import { DiJava } from "react-icons/di";

const KnowYourLungs = () => {
  const gridRef = useRef(null);
  const infoRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setShowButton(false);
      else setShowButton(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToInfo = () =>  {
    if (infoRef.current) {
      const y = infoRef.current.getBoundingClientRect().top + window.scrollY -70; // 80px de margen superior
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="pulmones-container">
        <div className="pulmones-content-flex">
          <div className="left-section">
            <div className="text-content-container">
              <h1 className="title">
                NUESTROS
                <br />
                PULMONES 
              </h1>
              <p className="subtitle">El organo clave para tu respiracion</p>
            </div>
            <div className="content-3d">
                <CanvasLoungKnow />
            </div>
          </div>
        </div>
        {showButton && (
          <button className="scroll-down-btn" onClick={handleScrollToInfo} aria-label="Ver más información">
            <span>Ver más información</span>
            <FaChevronDown size={24} />
          </button>
        )}
        <div ref={infoRef}></div>
        <div className="highlight-box">
          <div className="highlight-content">
            <h1 className="highlight-title">¿Como funcionan?</h1>
            <p className="highlight-text-workingloungs">
              Los pulmones funcionan mediante un proceso llamado ventilación,
              que implica la inhalación y exhalación de aire. Durante la
              inhalación, el diafragma se contrae y los músculos intercostales
              se contraen, lo que expande la cavidad torácica y permite que el
              aire entre en los pulmones. Durante la exhalación, estos músculos
              se relajan, lo que reduce el volumen de la cavidad torácica y
              expulsa el aire de los pulmones, eliminando el dióxido de carbono.
              Este proceso es esencial para mantener un equilibrio adecuado de
              oxígeno y dióxido de carbono en el cuerpo. Además, los pulmones
              también ayudan a filtrar partículas y contaminantes del aire que
              respiramos, protegiendo así nuestro sistema respiratorio y nuestra
              salud en general, lo que los convierte en un órgano vital para
              nuestra supervivencia.
            </p>
          </div>
        </div>
      </div>

      <div className="cuosirity-container">
        <div className="cuosirity-content-flex">
          <div className="cuosirity-title-container">
            <h1 className="cuosirity-title">Curiosidades</h1>
            <p className="cuosirity-text">
              Aqui hay algunas curiosidades sobre los pulmones que pueden
              sorprenderte, como su tamaño, su capacidad de regeneración y su
              papel en la producción de sonido. Los pulmones son órganos
              fascinantes que desempeñan un papel crucial en nuestra salud.
            </p>
            <div className="label-scroll-down">
              <span>Ver curiosidades</span>
              <FaChevronDown size={24}  />
            </div>
          </div>
          <div className="cuosirity-content">
            <div className="scroll-container">
              <button
                className="scroll-button left"
                onClick={() =>
                  gridRef.current?.scrollBy({
                    left: -gridRef.current.clientWidth,
                    behavior: "smooth",
                  })
                }
              >
                &#8249;
              </button>
              <div className="kyl-grid" ref={gridRef}>
                <div className="card-scroll">
                  <div className="card-rotation">
                    <div className="card-inner">
                      <div className="card-curiosity-front">
                        <h2 className="card-title"></h2>
                        <div className="img-loungs-curiosity">img.png</div>
                      </div>
                      <div className="card-curiosity-back">
                        <h2 className="card-title"></h2>
                        <p className="card-text">
                          Los pulmones son órganos esponjosos y flexibles que
                          ocupan la mayor parte de la cavidad torácica. En un
                          adulto promedio, los pulmones tienen un volumen total
                          de aproximadamente 6 litros, aunque solo una parte de
                          este volumen se utiliza para el intercambio de gases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-scroll">
                  <div className="card-rotation">
                    <div className="card-inner">
                      <div className="card-curiosity-front">
                        <h2 className="card-title">Tamaño</h2>
                        <div className="img-loungs-curiosity">img.png</div>
                      </div>
                      <div className="card-curiosity-back">
                        <h2 className="card-title">Tamaño</h2>
                        <p className="card-text">
                          Los pulmones son órganos esponjosos y flexibles que
                          ocupan la mayor parte de la cavidad torácica. En un
                          adulto promedio, los pulmones tienen un volumen total
                          de aproximadamente 6 litros, aunque solo una parte de
                          este volumen se utiliza para el intercambio de gases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-scroll">
                  <div className="card-rotation">
                    <div className="card-inner">
                      <div className="card-curiosity-front">
                        <h2 className="card-title">Tamaño</h2>
                        <div className="img-loungs-curiosity">img.png</div>
                      </div>
                      <div className="card-curiosity-back">
                        <h2 className="card-title">Tamaño</h2>
                        <p className="card-text">
                          Los pulmones son órganos esponjosos y flexibles que
                          ocupan la mayor parte de la cavidad torácica. En un
                          adulto promedio, los pulmones tienen un volumen total
                          de aproximadamente 6 litros, aunque solo una parte de
                          este volumen se utiliza para el intercambio de gases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="scroll-button right"
                onClick={() =>
                  gridRef.current?.scrollBy({
                    left: gridRef.current.clientWidth,
                    behavior: "smooth",
                  })
                }
              >
                &#8250;
              </button>
            </div>
           
          </div>
        </div>
        
      </div>
    </>
  );
};

export default KnowYourLungs;
