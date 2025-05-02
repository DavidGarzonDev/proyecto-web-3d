
import { Canvas } from "@react-three/fiber";
import "../pulmonaryHypertension.css";
import LungHypertension3D from "../modelos-3d-hypertension/LungHypertension3D.jsx";
import LightsHypertension from "../lights-hypertension/LightsHypertension.jsx"
import { OrbitControls} from "@react-three/drei";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx";

const CanvasPulmonaryHypertension = () => {
  return (
    <Canvas
      className="canvas-pulmonary-hypertension"    
      camera={{ position: [0, -20, 20], fov: 50 }}
      shadows={true}
    >
      <LightsHypertension />
      <OrbitControls
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true} 
      />
      <LungHypertension3D />
      <Recipe />
    </Canvas>
  );
};

export default CanvasPulmonaryHypertension;