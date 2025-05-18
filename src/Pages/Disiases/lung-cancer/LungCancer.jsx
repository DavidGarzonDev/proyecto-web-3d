import React from "react";
import "./lungCancer.css";
import CanvasLoungCancer from "./content/CanvasLoungCancer.jsx";
import { IoIosMove } from "react-icons/io";
import { GiLungs } from "react-icons/gi";
import TreatmentCancer from "./content/TreatmentCancer.jsx";
import SymptomsCancer from "./content/SymptomsCancer.jsx";
import PrecautionCancer from "./content/PrecautionCancer.jsx";

const LungCancer = () => {
  return (
    <>
      <div className="canvas-container">

        <h1 className="canvas-title-loung">Cáncer de Pulmón</h1>
        
        <div className="canvas-content-flex">
          <div className="canvas-loung-cancer">
            <CanvasLoungCancer />
          </div>
        </div>
      </div>

      <div className="what-is-cancer-container">
        <div className="what-is-cancer-content-flex">
          <div className="what-is-cancer-content">
            <h1 className="what-is-cancer-title">
              ¿Que es el cancer pulmonar?
            </h1>
            <p className="what-is-cancer-text">
              El cáncer de pulmón es un tipo de cáncer que se origina en los
              pulmones. Es uno de los tipos de cáncer más comunes y graves.
              Existen dos tipos principales de cáncer de pulmón: el cáncer de
              pulmón de células pequeñas (CPCP) y el cáncer de pulmón de células
              no pequeñas (CPNM). Los síntomas pueden incluir tos persistente,
              dolor en el pecho, dificultad para respirar y tos con sangre. Los
              factores de riesgo incluyen el tabaquismo, la exposición al humo
              de segunda mano y los contaminantes ambientales.
            </p>
          </div>
        </div>
      </div>

      <div className="symptoms-cancer-container">
        <div className="symptoms-cancer-content-flex">
          <div className="symptoms-cancer-content">
            <h1 className="symptoms-cancer-title">Síntomas</h1>
            <p className="symptoms-cancer-text">
              Los síntomas del cáncer de pulmón pueden incluir tos persistente,
              dolor en el pecho, dificultad para respirar, sibilancias, pérdida
              de peso inexplicada, fatiga y tos con sangre. Estos síntomas
              pueden variar según el tipo y la etapa del cáncer. Es importante
              consultar a un médico si se experimentan estos síntomas,
              especialmente si se tiene un historial de tabaquismo o exposición
              a sustancias tóxicas.
            </p>
            <p>Prueba dando click en el modelo 3D para escuchar la tos.</p>
          </div>
          <div className="symptoms-cancer-canvas-container">
            <div className="symptoms-cancer-canvas-content">
              <SymptomsCancer />
            </div>
          </div>
        </div>
      </div>

      <div className="treatment-cancer-container">
        <div className="treatment-cancer-content-flex">
          <div className="treatment-cancer-canvas-content">
            <TreatmentCancer />
          </div>
          <div className="treatment-cancer-content">
            <h1 className="treatment-cancer-title">Tratamiento</h1>
            <p className="treatment-cancer-text">
              El tratamiento del cáncer de pulmón puede incluir cirugía,
              quimioterapia, radioterapia y terapias dirigidas. La elección del
              tratamiento depende del tipo y la etapa del cáncer, así como de la
              salud general del paciente. Es importante consultar a un oncólogo
              para determinar el mejor enfoque de tratamiento.
            </p>
          </div>
        </div>
      </div>

      {/* Nueva sección: Precaución */}
      <div className="precaution-cancer-container">
        <div className="precaution-cancer-content-flex">
          <div className="precaution-cancer-canvas-content">
            <PrecautionCancer />
          </div>
          <div className="precaution-cancer-content">
            <h1 className="precaution-cancer-title">Precaución</h1>
            <p className="precaution-cancer-text">
              Para prevenir el cáncer de pulmón y mantener una buena salud, es
              sustancias nocivas como el tabaco y contaminantes ambientales, fundamental evitar la exposición a sustancias nocivas como el
              tabaco y contaminantes ambientales. Además, es importante llevar
              un estilo de vida saludable, que incluya una dieta equilibrada,
              ejercicio regular y buenas rutinas de sueño. Realiza chequeos
              médicos periódicos para la detección temprana y sigue siempre las
              indicaciones de tu médico.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LungCancer;
