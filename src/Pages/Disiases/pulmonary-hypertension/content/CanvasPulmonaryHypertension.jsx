import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryHypertension.css";
import LungHypertension3D from "../modelos-3d-hypertension/LungHypertension3D.jsx";
import LightsHypertension from "../lights-hypertension/LightsHypertension.jsx";
import { OrbitControls } from "@react-three/drei";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx";
import StagingOne from "./staging/StagingOne.jsx";
import Title from "../texts/Title.jsx";
import MoveHypertension from "../texts/MoveHypertension.jsx";
import TextAlert1 from "../texts/TextAlert1.jsx";

const CanvasPulmonaryHypertension = () => {
  const [moving, setMoving] = useState(false);
  const promptText = "Mueve con el ratón!";

  return (
    <Canvas
      className="canvas-pulmonary-hypertension"
      camera={{ position: [2, 5, 40], fov: 50 }}
      shadows={true}
      onPointerEnter={() => setMoving(true)}
      onPointerLeave={() => setMoving(false)}
      
    >
      <MoveHypertension text={promptText} hidden={moving} />
      <TextAlert1 />

      <LightsHypertension />
      

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        target={[0, 12, 0]}
        onStart={() => setMoving(true)}
        onEnd={() => setMoving(false)}
      />

      <LungHypertension3D />
      <Recipe />
      <StagingOne />
      <Title title={"HIPERTENSION"} />
    </Canvas>
  );
};

export default CanvasPulmonaryHypertension;