import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../lights-fibrosis/LightsFibrosis.jsx";
import "../pulmonaryFibrosis.css";
import FibrosisSalad from "../models-3d-fibrosis/SaladFibrosis.jsx";
import RecipeFibrosis from "../models-3d-fibrosis/RecipeFibrosis.jsx";
import InfoPreventionFibrosis from "../text3D/InfoPreventionFibrosis.jsx";



const PrecautionFibrosis = () => (
  <Canvas
    className="canvas-precaution-fibrosis"
    shadows
    camera={{ position: [0, 2, 10], fov: 30 }}
    
  >
    <Lights lightPosition={[-5,5,-5]} ambIntensity={10} dirIntensity={10} />
    <OrbitControls enableZoom={false} enablePan={false} />
    <FibrosisSalad position={[0,-2,0]}/>
    <InfoPreventionFibrosis />
    <RecipeFibrosis position={[0, 0, 0]} />
  </Canvas>
);

export default PrecautionFibrosis;