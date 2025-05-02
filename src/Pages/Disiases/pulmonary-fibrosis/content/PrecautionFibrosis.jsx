import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../lights-fibrosis/LightsFibrosis.jsx";
import "../PulmonaryFibrosis.css";
import FibrosisSalad from "../models-3d-fibrosis/SaladFibrosis.jsx";
import RecipeFibrosis from "../models-3d-fibrosis/RecipeFibrosis.jsx";



const PrecautionFibrosis = () => (
  <Canvas
    className="canvas-precaution-fibrosis"
    shadows
    camera={{ position: [-10, 5, 5], fov: 30 }}
    
  >
    <Lights lightPosition={[-5,5,-5]} ambIntensity={10} dirIntensity={10} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    <FibrosisSalad position={[0,-2,0]}/>
    <RecipeFibrosis position={[0, 0, 0]} />
  </Canvas>
);

export default PrecautionFibrosis;