import React from "react";
import "./LungCancer.css";
import CanvasLoungCancer from "./CanvasLoungCancer.jsx";
import { IoIosMove } from "react-icons/io";

const LungCancer = () => {
  return (
    <>
      <div className="canvas-container">
        <div className="move-icon-wrapper" title="Mueve usando el mouse">
          <h1>Mueve con el raton!</h1>
          <IoIosMove />
        </div>
        <div>
          <CanvasLoungCancer />
        </div>
      </div>
      <div className="lung-cancer-container">
        <h1 className="lung-cancer-title">Cancer de pulmon</h1>
        <div className="lung-cancer-description">
          <p>
            El cáncer de pulmón es un tipo de cáncer que se origina en los
            pulmones. Es uno de los tipos de cáncer más comunes y graves.
            Existen dos tipos principales de cáncer de pulmón: el cáncer de
            pulmón de células pequeñas (CPCP) y el cáncer de pulmón de células
            no pequeñas (CPNM). Los síntomas pueden incluir tos persistente,
            dolor en el pecho, dificultad para respirar y tos con sangre. Los
            factores de riesgo incluyen el tabaquismo, la exposición al humo de
            segunda mano y los contaminantes ambientales.
          </p>
        </div>
      </div>
    </>
  );
};

export default LungCancer;
