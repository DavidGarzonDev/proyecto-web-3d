import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LightsHypertensionTreatment from "../lights-hypertension/LightsHypertensionTreatment.jsx";
import LoungMedicineHypertension from "../modelos-3d-hypertension/LungMedicineHypertension.jsx";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx";
import StaginTwo from "./staging/StagingTwo.jsx";
import "../pulmonaryHypertension.css";
import TextAlert3 from "../texts/TextAlert3.jsx";

const PrecautionHypertension = () => {
  const meshRef = useRef();
  const velocityRef = useRef(0);
  const positionYRef = useRef(1); // posición inicial en Y
  const [bouncing, setBouncing] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Canvas
        className="canvas-precaution-hypertension"
        shadows
        camera={{ position: [-10, 1, 30], fov: 25 }}
      >
        <LightsHypertensionTreatment
          lightPosition={[-5, 5, -5]}
          ambIntensity={10}
          dirIntensity={10}
        />
        <OrbitControls enableZoom enablePan enableRotate />
        <LoungMedicineHypertension
          meshRef={meshRef}
          velocityRef={velocityRef}
          positionYRef={positionYRef}
          bouncing={bouncing}
          setBouncing={setBouncing}
          rotation={[0, 0, 0]}
          position={[0, 1, 0]}
        />
        <Recipe position={[0, 0, 0]} />
        <StaginTwo />
        <TextAlert3 />
      </Canvas>
    </div>
  );
};

export default PrecautionHypertension;