
import LightsHypertensionTreatment from "../lights-hypertension/LightsHypertensionTreatment.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryHypertension.css";
import LungTreatmentHypertension from "../modelos-3d-hypertension/LungTreatmentHypertension.jsx";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx"

const TreatmentHypertension = () => {
  return (
    <Canvas
      className="canvas-treatment-hypertension"
      shadows={true}                   
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <LightsHypertensionTreatment lightPosition={[5, 5, 7]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} enableDamping={false} />
        <LungTreatmentHypertension />
      <Recipe position={[0, 0, 0]}/>
    </Canvas>
  );
};

export default TreatmentHypertension;