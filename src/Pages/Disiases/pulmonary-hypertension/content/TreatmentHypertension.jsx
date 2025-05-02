
import LightsHypertension from "../lights-hypertension/LightsHypertension.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../PulmonaryHypertension.css";
import LungTreatmentHypertension from "../modelos-3d-hypertension/LungTreatmentHypertension.jsx";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx"

const TreatmentHypertension = () => {
  return (
    <Canvas
      className="canvas-treatment-hypertension"
      shadows={true}                   
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <LightsHypertension lightPosition={[5, 5, 7]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} enableDamping={false} />
        <LungTreatmentHypertension />
      <Recipe position={[0, 0, 0]}/>
    </Canvas>
  );
};

export default TreatmentHypertension;