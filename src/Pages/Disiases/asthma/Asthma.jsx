import "./Asthma.css";
import CanvasAsthma from "./components/CanvasAsthma";
import TreatmentAsthma from "./components/TreatmentAsthma";
import SymptomsAsthma from "./components/SymptomsAsthma";
import PrecautionAsthma from "./components/PrecautionAsthma";
import { Suspense } from "react";

const Asthma = () => {
  

  return (
    <> <div className="main-content">
      <h1 className="canvas-asthma-title">Asma</h1>

      <div className="canvas-container">
        <div className="canvas-content-flex">
          <div className="canvas-asthma">
            <CanvasAsthma />
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
            <div className="symptoms-asthma-text">
              <h3>Síntomas comunes:</h3>
              <ul>
                <li>Tos con o sin flema</li>
                <li>Silbidos o sibilancias al respirar</li>
                <li>Dificultad para respirar, especialmente al hacer ejercicio</li>
                <li>Dolor o presión en el pecho</li>
                <li>Dificultad para dormir</li>
                <li>Retracción de la piel entre las costillas</li>
                <li>Respiración anormal (exhalación más larga que la inhalación)</li>
              </ul>

              <h3>Síntomas de emergencia:</h3>
              <ul>
                <li>Labios o cara con color azulado (cianosis)</li>
                <li>Dificultad respiratoria extrema</li>
                <li>Somnolencia o confusión durante un ataque</li>
                <li>Dificultad para hablar</li>
                <li>Pulso muy rápido</li>
                <li>Ansiedad intensa por falta de aire</li>
                <li>Sudoración excesiva</li>
                <li>Paro respiratorio (la respiración se detiene)</li>
              </ul>
            </div>
          </div>
          <div className="symptoms-asthma-canvas-container">
            <div className="symptoms-asthma-canvas-content">
              <Suspense fallback={<div>Cargando escena de síntomas...</div>}>
                <SymptomsAsthma key="symptoms-canvas" />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Sección: Tratamiento */}
      <div className="treatment-asthma-container">
        <div className="treatment-asthma-content-flex">
          <div className="treatment-asthma-canvas-content">
            <Suspense fallback={<div>Cargando escena de tratamiento...</div>}>
              <TreatmentAsthma key="treatment-canvas" />
            </Suspense>
          </div>
          <div className="treatment-asthma-content">
            <h1 className="treatment-asthma-title">Tratamiento</h1>
            <p className="treatment-asthma-text">
              El tratamiento del asma incluye medicamentos de control a largo plazo
              (como los corticosteroides inhalados) y medicamentos de alivio rápido (como los broncodilatadores).
              Además, es importante identificar y evitar los desencadenantes individuales y
              tener un plan de acción en caso de crisis. Si se sigue el tratamiento correctamente,
              la mayoría de las personas pueden llevar una vida normal y activa.
            </p>
          </div>
        </div>
      </div>

      {/* Sección: Prevención */}
      <div className="precaution-asthma-container">
        <div className="precaution-asthma-content-flex">
          
          <div className="precaution-asthma-content">
            <h1 className="precaution-asthma-title">Prevención</h1>
            <p className="precaution-asthma-text">
              Para prevenir crisis de asma se recomienda evitar alérgenos como ácaros, polen o mascotas;
              reducir la exposición al humo de tabaco y la contaminación; mantener una buena higiene en casa;
              seguir adecuadamente el tratamiento médico y usar correctamente los inhaladores.
              También es útil realizar ejercicio moderado regularmente, ya que fortalece los pulmones
              y mejora la capacidad respiratoria en personas con el asma bien controlada.
            </p>
          </div>

          
          <div className="precaution-asthma-canvas-content">
            <Suspense fallback={<div>Cargando escena de prevención...</div>}>
              <PrecautionAsthma key="precaution-canvas" />
            </Suspense>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Asthma;
