import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import Lights from "../lights-fibrosis/LightsFibrosis.jsx";
import "../pulmonaryFibrosis.css";
import FibrosisSalad from "../models-3d-fibrosis/SaladFibrosis.jsx";
import RecipeFibrosis from "../models-3d-fibrosis/RecipeFibrosis.jsx";
import InfoPreventionFibrosis from "../text3D/InfoPreventionFibrosis.jsx";
import Recomendation3D from "../text3D/Recomendation3D.jsx";

const PrecautionFibrosis = () => (
  <Canvas
    className="canvas-precaution-fibrosis"
    shadows
    camera={{ position: [0, 2, 10], fov: 30 }}
  >
    <Lights lightPosition={[-5, 5, -5]} ambIntensity={10} dirIntensity={10} />
    <OrbitControls enableZoom={false} enablePan={false} />
    <FibrosisSalad position={[0, -2, 0]} />
    <Recomendation3D text={"Una dieta saludable \n previene la Fibrosis"} />
    <InfoPreventionFibrosis />
    <RecipeFibrosis position={[0, 0, 0]} />
    <Sparkles
      count={100}
      size={10}
      color="#ff7000"
      speed={0.4}
      opacity={0.6}
      scale={[5, 10, 5]}
      position={[0, 0, 0]}
    />
  </Canvas>
);

export default PrecautionFibrosis;
