import { Canvas } from "@react-three/fiber";
import "../PulmonaryFibrosis.css";
import LoungFibrosisModel3D from "../models-3d-fibrosis/LoungFibrosisModel3D";
import Lights from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";

const CanvasLoungFibrosis = () => {
    return (
     <Canvas className="canvas-loung-fibrosis" camera={{ position: [0, 2, 5], fov: 50 }}>
       <Lights />
       <OrbitControls
         enableZoom={true} 
         enablePan={true} 
         enableRotate={true} 
       />
       <LoungFibrosisModel3D />
     </Canvas>
   );
 };

export default CanvasLoungFibrosis;
