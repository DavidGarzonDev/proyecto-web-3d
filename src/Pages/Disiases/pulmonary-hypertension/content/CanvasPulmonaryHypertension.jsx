
import { Canvas } from "@react-three/fiber";
import "../pulmonaryHypertension.css";
import LungHypertension3D from "../modelos-3d-hypertension/LungHypertension3D.jsx";
import LightsHypertension from "../lights-hypertension/LightsHypertension.jsx"
import { OrbitControls} from "@react-three/drei";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx";
import StagingOne from "./staging/StagingOne.jsx";
import Title from "../texts/Title.jsx";

const CanvasPulmonaryHypertension = () => {
  return (
    <Canvas
      className="canvas-pulmonary-hypertension"    
      camera={{ position: [4, 20, 30], fov: 50 }}
      shadows={true}
    >
      <LightsHypertension />
      <OrbitControls
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true} 
        target={[0, 12, 0]} 
      />
      <LungHypertension3D />
      <Recipe />
      <StagingOne/>
      <Title title={"HYPERTENSION"}/>
    </Canvas>
  );
};

export default CanvasPulmonaryHypertension;