import { useState, useEffect } from "react";
import LightsHypertensionSymptoms from "../lights-hypertension/LightsHypertensionSymptoms.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryHypertension.css";
import LungSymptomsHypertension from "../modelos-3d-hypertension/LungSymptomsHypertension.jsx";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx";
import Title2 from "../texts/Title2.jsx";
import Title3 from "../texts/Title3.jsx";

const SymptomsHypertension = () => {
  const [step, setStep] = useState(0); // 0: inicio, 1: doble click, 2: presionó "o"

  // Captura tecla "o" solo si ya se hizo doble click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "o" && step === 1) {
        setStep(2);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [step]);

  // Escucha si el modelo se activó o desactivó con doble clic
  const handleModelActivation = (isActive) => {
    if (isActive && step === 0) {
      setStep(1); // Solo se avanza si es el primer doble click
    }
  };

  return (
    <Canvas
      className="canvas-symptoms-hypertension"
      shadows={true}
      camera={{ position: [4, 3, 9], fov: 50 }}
    >
      <LightsHypertensionSymptoms lightPosition={[0, 5, 0]} />
      <OrbitControls enableZoom enablePan enableRotate />
      <LungSymptomsHypertension toggleActivation={handleModelActivation} />
      <Recipe />
      <Title2 title2={"OXIMETER"} />
      {step === 0 && <Title3 title3={"Presione doble click"} />}
      {step === 1 && <Title3 title3={`Presione la letra "o"`} />}
    </Canvas>
  );
};

export default SymptomsHypertension;