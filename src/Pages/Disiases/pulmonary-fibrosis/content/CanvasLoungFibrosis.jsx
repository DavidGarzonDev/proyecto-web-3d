import LightsFibrosis from "../lights-fibrosis/LightsFibrosis";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../pulmonaryFibrosis.css";
import LoungFibrosis from "../models-3d-fibrosis/LoungFibrosisModel3D";
import RecipeFibrosis from "../models-3d-fibrosis/RecipeFibrosis";
import Move from "../text3D/Move.jsx";
import InfoPulmonaryFirbosis from "../text3D/InfoPulmonaryFibrosis.jsx";

const CanvasLoungFibrosis = () => {
  const [moving, setMoving] = useState(false);

  return (
    <Canvas
      className="canvas-loung-fibrosis"
      shadows
      camera={{ position: [0, 0, 4], fov: 50 }}
      onPointerEnter={() => setMoving(true)}
      onPointerLeave={() => setMoving(false)}
    >
      <LightsFibrosis
        lightPosition={[0, 1, 1]}
        ambIntensity={10}
        dirIntensity={10}
      />
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        onStart={() => setMoving(true)}
        onEnd={() => setMoving(false)}
      />
      <LoungFibrosis position={[0, 0, 0]} />
      <InfoPulmonaryFirbosis />
      <RecipeFibrosis position={[0, 0, 0]} />
      <Move text={"Fibrosis Pulmonar"} hidden={moving} />
    </Canvas>
  );
};

export default CanvasLoungFibrosis;
