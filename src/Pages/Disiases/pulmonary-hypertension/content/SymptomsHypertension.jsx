
import LightsHypertensionSymptoms from "../lights-hypertension/LightsHypertensionSymptoms.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryHypertension.css";
import LungSymptomsHypertension from "../modelos-3d-hypertension/LungSymptomsHypertension.jsx";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx"


const SymptomsHypertension = () => {


  return (
    <Canvas
        className="canvas-symptoms-hypertension"
        shadows={true}                   /* enable shadowMap */
      camera={{ position: [6, 4, 4], fov: 50 }}
    >
      {/* Tilt the directional light for side shadow */}
      <LightsHypertensionSymptoms lightPosition={[0, 5, 0]} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <LungSymptomsHypertension />
      <Recipe />
    </Canvas>
  );
};

export default SymptomsHypertension;