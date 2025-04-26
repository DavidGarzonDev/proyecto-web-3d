import React from "react";
import Lights from "../lights-cancer/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungTreatmentCancer from "../modelos-3d-cancer/LoungTreatmentCancer.jsx";

const TreatmentCancer = () => {
  return (
    <Canvas
        className="canvas-treatment-cancer"
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <Lights />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} enableDamping={false} />
        <LoungTreatmentCancer />
    </Canvas>
  );
};

export default TreatmentCancer;
