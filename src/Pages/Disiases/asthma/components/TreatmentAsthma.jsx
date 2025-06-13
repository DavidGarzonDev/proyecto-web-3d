
import Lights from "../lights-asthma/Ligths";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Inhaler from "../models-3d-asthma/Inhaler";
import Recipe from "../models-3d-asthma/Recipe";
import { Sky } from "@react-three/drei";
import TextTreatment from "../texts/TextTreatment";
const TreatmentAsthma = () => {
  return (
    <Canvas
      className="canvas-treatment-asthma"
      camera={{ position: [0, 
        0, 10], fov: 60, near: 0.1, far: 1000 }
    }
      shadows={true}
    >
      <Lights />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
      <Inhaler position={[0, -1, 0]} />
      <Recipe position= {[0,0,0]} />
      <Sky/>
      <TextTreatment/>
      
    </Canvas>
  );
};

export default TreatmentAsthma;