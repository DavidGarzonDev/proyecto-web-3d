import React from "react";
import "./Asthma.css";
import CanvasAsthma from "./components/CanvasAsthma";
import { IoIosMove } from "react-icons/io";
import TreatmentAsthma from "./components/TreatmentAsthma";
import SymptomsAsthma from "./components/SymptomsAsthma";
import PrecautionAsthma from "./components/PrecautionAsthma";

const Asthma = () => {
  return (
    <>
      
      <div className="canvas-container">
        <div className="canvas-content-flex">
          <div className="canvas-asthma">
            <CanvasAsthma />
          </div>
          <div className="move-icon-wrapper" title="Mueve usando el mouse">
            <h1>Mueve con el ratón!</h1>
            <IoIosMove />
          </div>
        </div>
      </div>

      {/* Sección: ¿Qué es el Asma? */}
      <div className="what-is-asthma-container">
        <div className="what-is-asthma-content-flex">
          <div className="what-is-asthma-content">
            <h1 className="what-is-asthma-title">¿Qué es el Asma?</h1>
            <p className="what-is-asthma-text">
              El asma es una enfermedad crónica de las vías respiratorias que causa inflamación 
              y estrechamiento de los bronquios. Es una condición común que afecta a personas 
              de todas las edades y puede variar en severidad desde leve hasta potencialmente mortal.
            </p>
          </div>
        </div>
      </div>

      {/* Sección: Síntomas */}
      <div className="symptoms-asthma-container">
        <div className="symptoms-asthma-content-flex">
          <div className="symptoms-asthma-content">
            <h1 className="symptoms-asthma-title">Síntomas</h1>
            <p className="symptoms-asthma-text">
              Los síntomas del asma incluyen dificultad para respirar, opresión en el pecho, 
              silbidos al respirar y tos persistente, especialmente por la noche o temprano 
              en la mañana. Estos síntomas pueden empeorar con el ejercicio o la exposición 
              a alérgenos.
            </p>
          </div>
          <div className="symptoms-asthma-canvas-container">
            <div className="symptoms-asthma-canvas-content">
              <SymptomsAsthma />
            </div>
          </div>
        </div>
      </div>

      {/* Sección: Tratamiento */}
      <div className="treatment-asthma-container">
        <div className="treatment-asthma-content-flex">
          <div className="treatment-asthma-canvas-content">
            <TreatmentAsthma />
          </div>
          <div className="treatment-asthma-content">
            <h1 className="treatment-asthma-title">Tratamiento</h1>
            <p className="treatment-asthma-text">
              El tratamiento del asma incluye medicamentos de control a largo plazo 
              (corticosteroides inhalados) y medicamentos de alivio rápido (broncodilatadores). 
              También es importante identificar y evitar los desencadenantes y tener un plan 
              de acción para ataques agudos.
            </p>
          </div>
        </div>
      </div>

      {/* Nueva sección: Prevención */}
      <div className="precaution-asthma-container">
        <div className="precaution-asthma-content-flex">
          <div className="precaution-asthma-canvas-content">
          <PrecautionAsthma />
          </div>
          <div className="precaution-asthma-content">
            <h1 className="precaution-asthma-title">Prevención</h1>
            <p className="precaution-asthma-text">
              Para prevenir crisis de asma se recomienda: evitar desencadenantes 
              como alérgenos (ácaros, polen, mascotas), humo de tabaco y contaminación; 
              usar correctamente los medicamentos prescritos; vacunarse contra la gripe; 
              mantener un peso saludable; realizar ejercicio moderado; y tener un plan 
              de acción para crisis. Es fundamental seguir las indicaciones médicas y 
              llevar siempre el inhalador de rescate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asthma;