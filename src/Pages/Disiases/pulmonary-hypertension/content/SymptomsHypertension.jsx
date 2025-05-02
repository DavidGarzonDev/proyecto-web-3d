
import LightsHypertension from "../lights-hypertension/LightsHypertension.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../PulmonaryHypertension.css";
import LungSymptomsHypertension from "../modelos-3d-hypertension/LungSymptomsHypertension.jsx";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx"


const SymptomsHypertension = () => {


  return (
    <Canvas
        className="canvas-symptoms-hypertension"
        shadows={true}                   /* enable shadowMap */
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      {/* Tilt the directional light for side shadow */}
      <LightsHypertension lightPosition={[0, 5, 0]} />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <LungSymptomsHypertension />
      <Recipe />
    </Canvas>
  );
};

export default SymptomsHypertension;