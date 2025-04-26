import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../PulmonaryFibrosis.css";
import LoungSymptoms from "../models-3d-fibrosis/PersonCoughtModel3D";


const SymptomsFibrosis = () => {
   return (
     <Canvas
         className="canvas-symptoms-fibrosis"
       camera={{ position: [0, -2, 0], fov: 20 }}
     >
       <LightsFibrosis />
       <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
         <LoungSymptoms />
     </Canvas>
   );
 };
export default SymptomsFibrosis;