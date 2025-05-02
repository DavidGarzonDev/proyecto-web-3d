import React from "react";
import Lights from "../lights-asthma/Ligths";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Person from "../models-3d-asthma/Person";

const SymptomsAsthma = () => {
  return (
    <Canvas
      className="canvas-symptoms-asthma"
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <Lights />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <Person scale={[0.8, 0.8, 0.8]} position={[0, -2, 0]} />
    </Canvas>
  );
};

export default SymptomsAsthma;