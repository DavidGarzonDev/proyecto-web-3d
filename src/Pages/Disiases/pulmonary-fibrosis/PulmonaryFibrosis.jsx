import "./pulmonaryFibrosis.css";
import CanvasLoungFibrosis from "./content/CanvasLoungFibrosis.jsx";
import TreatmentFibrosis from "./content/TreatmentFibrosis.jsx";
import SymptomsFibrosis from "./content/SymptomsFibrosis.jsx";
import PrecautionFibrosis from "./content/PrecautionFibrosis.jsx";

const PulmonaryFibrosis = () => {
  return (
    <>
      <div className="canvas-container">
        <div className="canvas-pulmonary-fibrosis">
          <CanvasLoungFibrosis />
        </div>
      </div>

      <div className="what-is-fibrosis-container">
        <div className="what-is-fibrosis-content">
          <h1 className="what-is-fibrosis-title">
            ¿Qué es la Fibrosis Pulmonar?
          </h1>
          <p className="what-is-fibrosis-text">
            La fibrosis pulmonar es una enfermedad que causa cicatrización en
            los pulmones, dificultando la respiración. Esta cicatrización daña
            los alvéolos, lo que reduce la capacidad pulmonar para oxigenar la
            sangre. Los síntomas incluyen tos seca, fatiga y dificultad para
            respirar, especialmente al hacer esfuerzo. Sus causas pueden ser
            desconocidas (idiopática) o estar relacionadas con la exposición a
            contaminantes, enfermedades autoinmunes o ciertos medicamentos.
          </p>
        </div>
      </div>

      <div className="symptoms-fibrosis-container">
        <div className="symptoms-fibrosis-content">
          <h1 className="symptoms-fibrosis-title">Sintomas</h1>
          <p className="symptoms-fibrosis-text">
            Los síntomas de la fibrosis pulmonar pueden incluir dificultad para
            respirar, tos seca persistente, fatiga, pérdida de peso sin causa
            aparente, dolor en el pecho y acropaquia (dedos en forma de palillo
            de tambor). Estos síntomas suelen empeorar con el tiempo y pueden
            afectar la calidad de vida. Es fundamental acudir al médico si se
            presentan, sobre todo si hay antecedentes de exposición a sustancias
            tóxicas o enfermedades autoinmunes.
          </p>
        </div>
        <div className="symptoms-fibrosis-canvas-container">
          <div className="symptoms-fibrosis-canvas-content">
            <SymptomsFibrosis />
          </div>
        </div>
      </div>

      <div className="treatment-fibrosis-container">
        <div className="treatment-fibrosis-canvas-content">
          <TreatmentFibrosis />
        </div>
        <div className="treatment-fibrosis-content">
          <h1 className="treatment-fibrosis-title">Tratamiento</h1>
          <p className="treatment-fibrosis-text">
            El tratamiento de la fibrosis pulmonar depende de la causa y la
            gravedad de la enfermedad. Puede incluir medicamentos antifibróticos
            para ralentizar la progresión, oxigenoterapia para mejorar la
            respiración y rehabilitación pulmonar para aumentar la resistencia
            física. En casos graves, se puede considerar un trasplante de
            pulmón. Aunque no existe una cura definitiva, un diagnóstico
            temprano y el manejo adecuado pueden mejorar la calidad de vida del
            paciente.
          </p>
        </div>
      </div>
      <div className="precaution-fibrosis-container">
        <div className="precaution-fibrosis-content-flex">
          <div className="precaution-fibrosis-canvas-content">
            <PrecautionFibrosis />
          </div>
          <div className="precaution-fibrosis-content">
            <h1 className="precaution-fibrosis-title">Precaución</h1>
            <p className="precaution-fibrosis-text">
              Para prevenir el cáncer de pulmón y mantener una buena salud, es
              Las precauciones para la fibrosis pulmonar incluyen evitar la
              exposición a contaminantes, humo de tabaco y productos químicos
              irritantes. Es importante mantener un estilo de vida saludable, lo
              que incluye comer comida sana, rica en frutas, verduras y
              proteínas magras, para fortalecer el sistema inmunológico. También
              se recomienda vacunarse contra la gripe y la neumonía, hacer
              ejercicio moderado y seguir el tratamiento médico al pie de la
              letra para controlar los síntomas y prevenir complicaciones.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PulmonaryFibrosis;
