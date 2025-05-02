import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../PulmonaryFibrosis.css";
import LoungFibrosis from "../models-3d-fibrosis/LoungFibrosisModel3D";
import RecipeFibrosis from "../models-3d-fibrosis/RecipeFibrosis";

const CanvasLoungFibrosis = () => {
  return (
    <Canvas
      className="canvas-loung-fibrosis"
      shadows
      camera={{ position: [0, 0, 4], fov: 50 }}
    >
      <LightsFibrosis
        lightPosition={[0, 1, 1]}
        ambIntensity={10}
        dirIntensity={10}
      />
      <OrbitControls enableZoom={true} enablePan={false} enableRotate={true} />
      <LoungFibrosis position={[0, 0, 0]} />
      <RecipeFibrosis position={[0, 0, 0]} />
    </Canvas>
  );
};

export default CanvasLoungFibrosis;
