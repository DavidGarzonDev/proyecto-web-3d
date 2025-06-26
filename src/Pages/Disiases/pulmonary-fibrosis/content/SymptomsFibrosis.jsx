import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryFibrosis.css";
import LoungSymptoms from "../models-3d-fibrosis/PersonCoughtModel3D";
import Recipe from "../models-3d-fibrosis/RecipeFibrosis";
import StagingSymptoms from "../staging/StagingSymptoms";
import SymptomsText from "../text3D/SymtompsText";
import InfoSymtompsFibrosis from "../text3D/InfoSymtompsFibrosis";

const SymptomsFibrosis = () => {
  return (
    <Canvas
      className="canvas-symptoms-fibrosis"
      camera={{ position: [0, 5, 20], fov: 45 }}
      shadows={true}
    >
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={0}
        maxDistance={150}
      />
      <LightsFibrosis
        lightPosition={[5, 7, 5]}
        ambIntensity={10}
        dirIntensity={10}
      />
      <Recipe />
      <SymptomsText text={"Ve al hospital si tienes algún sintoma"} />
      <LoungSymptoms position={[0, -3, 0]} scale={[5, 5, 5]} castShadow />
      <InfoSymtompsFibrosis />
      <StagingSymptoms />
    </Canvas>
  );
};
export default SymptomsFibrosis;
