import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryFibrosis.css";
import LoungSymptoms from "../models-3d-fibrosis/PersonCoughtModel3D";
import Recipe from "../models-3d-fibrosis/RecipeFibrosis";

const SymptomsFibrosis = () => {
  return (
    <Canvas
      className="canvas-symptoms-fibrosis"
      camera={{ position: [0, 5, 10], fov: 10 }}
      shadows={true}
    >
      <OrbitControls enableZoom={true} enablePan={true} />
      <LightsFibrosis />
      <Recipe />
      <LoungSymptoms position={[0, -1, 0]} />
    </Canvas>
  );
};
export default SymptomsFibrosis;