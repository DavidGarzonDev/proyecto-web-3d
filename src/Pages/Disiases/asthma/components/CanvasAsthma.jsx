import React from "react";
import { Canvas } from "@react-three/fiber";
import Lungs from "../models-3d-asthma/Lungs";
import Lights from "../lights-asthma/Ligths";
import { OrbitControls } from "@react-three/drei";
import Recipe from "../models-3d-asthma/Recipe";

const CanvasAsthma = () => {
  return (
    <Canvas
      className="canvas-asthma"
      camera={{ position: [0, 2, 7], fov: 55 }}
      shadows={true}>

      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
      <Lungs />
      <Lights />
      <Recipe />
    </Canvas>

  );
};

export default CanvasAsthma;