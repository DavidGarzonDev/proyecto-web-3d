import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../PulmonaryFibrosis.css";
import LoungTreatmentFibrosis from "../models-3d-fibrosis/PillsModel3D";
import RecipeFibrosis from "../models-3d-fibrosis/RecipeFibrosis";

const TreatmentFibrosis = () => {
  return (
    <Canvas
    className="canvas-treatmen-fibrosis"
    shadows
    camera={{ position: [-10, 5, 5], fov: 30 }}
    
  >
    <LightsFibrosis lightPosition={[-5,5,-5]} ambIntensity={10} dirIntensity={10} />
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
    <LoungTreatmentFibrosis position={[0,-2,0]}/>
    <RecipeFibrosis position={[0, 0, 0]} />
  </Canvas>
   );
 };

export default TreatmentFibrosis;
