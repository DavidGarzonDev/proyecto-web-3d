import React from "react";
import Lights from "../lights-asthma/Ligths";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Inhaler from "../models-3d-asthma/Inhaler";

const TreatmentAsthma = () => {
  return (
    <Canvas
      className="canvas-treatment-asthma"
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <Lights />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
      <Inhaler scale={[0.5, 0.5, 0.5]} position={[0, -3, -1]} />
    </Canvas>
  );
};

export default TreatmentAsthma;