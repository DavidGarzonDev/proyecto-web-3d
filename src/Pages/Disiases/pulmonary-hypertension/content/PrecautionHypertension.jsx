import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import LightsHypertension from "../lights-hypertension/LightsHypertension.jsx";
import "../pulmonaryHypertension.css";
import LoungMedicineHypertension from "../modelos-3d-hypertension/LungMedicineHypertension.jsx";
import Recipe from "../modelos-3d-hypertension/Recipe.jsx";



const PrecautionHypertension = () => (
  <Canvas
    className="canvas-precaution-hypertension"
    shadows
    camera={{ position: [-15,6,5], fov:25 }}
    
  >
    <LightsHypertension lightPosition={[-5,5,-5]} ambIntensity={10} dirIntensity={10} />
    <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    <LoungMedicineHypertension rotation={[Math.PI / 1,0,0]} position={[0,-1,0]}/>
    <Recipe position={[0, 0, 0]} />
  </Canvas>
);

export default PrecautionHypertension;