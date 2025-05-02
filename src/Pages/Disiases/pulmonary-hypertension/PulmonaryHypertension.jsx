
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
          <div className="move-icon-wrapper" title="Mueve usando el mouse">
            <h1>Mueve con el raton!</h1>
            <IoIosMove />
          </div>
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
            La hipertensión pulmonar es una condición médica que afecta las arterias 
            de los pulmones y el lado derecho del corazón. Se caracteriza por un aumento 
            anormal de la presión en las arterias pulmonares. Existen varios tipos de 
            hipertensión pulmonar, dependiendo de su causa. Los síntomas pueden incluir 
            dificultad para respirar, fatiga, dolor en el pecho, mareos e hinchazón en 
            las piernas o el abdomen. Los factores de riesgo incluyen enfermedades 
            cardíacas o pulmonares, trastornos autoinmunes y antecedentes familiares 
            de hipertensión pulmonar.
            </p>
          </div>
        </div>
      </div>

      <div className="symptoms-hypertension-container">
        <div className="symptoms-hypertension-content-flex">
          <div className="symptoms-hypertension-content">
            <h1 className="symptoms-hypertension-title">Sintomas</h1>
            <p className="symptoms-hypertension-text">
            Los síntomas de la hipertensión pulmonar pueden incluir dificultad para respirar, 
            fatiga, dolor en el pecho, mareos, desmayos, hinchazón en las piernas o el abdomen 
            y latidos cardíacos acelerados o irregulares. Estos síntomas tienden a empeorar 
            con el tiempo a medida que avanza la enfermedad. Es importante consultar a un 
            médico si se presentan estos signos, especialmente si existe un historial de 
            enfermedades cardíacas, pulmonares o factores de riesgo asociados.
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
               El tratamiento de la hipertensión pulmonar puede incluir medicamentos para 
               dilatar los vasos sanguíneos pulmonares, anticoagulantes, diuréticos, 
               oxigenoterapia y, en casos más avanzados, trasplante de pulmón. La elección 
               del tratamiento depende de la causa subyacente, la gravedad de la enfermedad 
               y el estado general del paciente. Es fundamental consultar a un especialista 
               en hipertensión pulmonar para determinar el mejor enfoque terapéutico.
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
            Para prevenir la hipertensión pulmonar y mantener una buena salud respiratoria 
            y cardiovascular, es fundamental evitar factores de riesgo como el tabaquismo, 
            la exposición prolongada a contaminantes ambientales y el sedentarismo. Adoptar 
            un estilo de vida saludable, que incluya una alimentación balanceada, ejercicio 
            físico regular y un buen control del estrés, puede ayudar significativamente a 
            reducir el riesgo. Realiza actividad física moderada de forma constante y acude 
            a chequeos médicos periódicos para una detección temprana y seguimiento adecuado. 
            Siempre sigue las indicaciones de tu médico.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PulmonaryHypertension;