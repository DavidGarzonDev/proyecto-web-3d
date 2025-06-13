import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryFibrosis.css";
import LoungTreatmentFibrosis from "../models-3d-fibrosis/PillsModel3D";
import RecipeFibrosis from "../models-3d-fibrosis/RecipeFibrosis";
import StagingTreatment from "../staging/StagingTreatment";

const TreatmentFibrosis = () => {
  return (
    <Canvas
      className="canvas-treatmen-fibrosis"
      shadows
      camera={{ position: [6, 5, 10], fov: 40 }}
    >
      <LightsFibrosis
        lightPosition={[5, 7, 5]}
        ambIntensity={0.2}
        dirIntensity={0.5}
      />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />

      <LoungTreatmentFibrosis position={[0, -2, 0]} />
      <StagingTreatment />

      <RecipeFibrosis position={[0, 0, 0]} />
    </Canvas>
  );
};

export default TreatmentFibrosis;
