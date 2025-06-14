
import "./pulmonaryHypertension.css";
import CanvasPulmonaryHypertension from "./content/CanvasPulmonaryHypertension.jsx";
import { IoIosMove } from "react-icons/io";
import TreatmentHypertension from "./content/TreatmentHypertension.jsx";
import SymptomsHypertension from "./content/SymptomsHypertension.jsx";
import PrecautionHypertension from "./content/PrecautionHypertension.jsx";

const PulmonaryHypertension = () => {
  return (
    <>
      <div className="canvas-container">
        <div className="canvas-content-flex">
          
          <div className="canvas-pulmonary-hypertension">
            <CanvasPulmonaryHypertension />
          </div>
        </div>
      </div>

      <div className="what-is-hypertension-container">
        <div className="what-is-hypertension-content-flex">
          <div className="what-is-hypertension-content">
            <h1 className="what-is-hypertension-title">
              ¿Que es la hipertension pulmonar?
            </h1>
            <p className="what-is-hypertension-text">
            La hipertensión pulmonar (HP) es una enfermedad que afecta las arterias de los pulmones
             y el corazón (lado derecho), causando un aumento anormal de la presión en las arterias
              pulmonares.
            </p>
          </div>
        </div>
      </div>

      <div className="symptoms-hypertension-container">
        <div className="symptoms-hypertension-content-flex">
          <div className="symptoms-hypertension-content">
            <h1 className="symptoms-hypertension-title">Sintomas</h1>
            <p className="symptoms-hypertension-text">
            - Dificultad para respirar<br />
            - Fatiga<br />
            - Dolor en el pecho<br />
            - Mareos<br />
            - Hinchazón en piernas o abdomen
            </p>
          </div>
          <div className="symptoms-hypertension-canvas-container">
            <div className="symptoms-hypertension-canvas-content">
              <SymptomsHypertension />
            </div>
          </div>
        </div>
      </div>

      <div className="treatment-hypertension-container">
        <div className="treatment-hypertension-content-flex">
          <div className="treatment-hypertension-canvas-content">
            <TreatmentHypertension />
          </div>
          <div className="treatment-hypertension-content">
            <h1 className="treatment-hypertension-title">Tratamiento</h1>
            <p className="treatment-hypertension-text">
               El tratamiento de la hipertensión pulmonar incluye medicamentos (vasodilatadores, 
               anticoagulantes, diuréticos), oxigenoterapia y, en casos graves, trasplante de pulmón.
                Siempre bajo supervisión médica especializada.
            </p>
          </div>
        </div>
      </div>
            {/* Nueva sección: Precaución */}
            <div className="precaution-hypertension-container">
        <div className="precaution-hypertension-content-flex">
          <div className="precaution-hypertension-canvas-content">
            <PrecautionHypertension />
          </div>
          <div className="precaution-hypertension-content">
            <h1 className="precaution-hypertension-title">Precaución</h1>
            <p className="precaution-hypertension-text">
            Evita tabaquismo, contaminantes y sedentarismo. Mantén una vida saludable con alimentación 
            balanceada, ejercicio regular y control médico periódico. Sigue siempre las recomendaciones 
            de tu especialista.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PulmonaryHypertension;