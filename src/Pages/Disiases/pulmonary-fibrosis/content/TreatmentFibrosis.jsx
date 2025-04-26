import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../PulmonaryFibrosis.css";
import LoungTreatmentFibrosis from "../models-3d-fibrosis/PillsModel3D";

const TreatmentFibrosis = () => {
  return (
    <Canvas
        className="canvas-treatment-fibrosis"
       camera={{ position: [0, 2, 5], fov: 50 }}
     >
       <LightsFibrosis />
       <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} enableDamping={false} />
         <LoungTreatmentFibrosis />
     </Canvas>
   );
 };

export default TreatmentFibrosis;
