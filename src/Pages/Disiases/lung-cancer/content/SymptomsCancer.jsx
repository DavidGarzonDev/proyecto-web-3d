import React from "react";
import Lights from "../lights-cancer/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungSymptoms from "../modelos-3d-cancer/LoungSymptoms.jsx";


const SymptomsCancer = () => {
  return (
    <Canvas
        className="canvas-symptoms-cancer"
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <Lights />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <LoungSymptoms />
    </Canvas>
  );
};

export default SymptomsCancer;