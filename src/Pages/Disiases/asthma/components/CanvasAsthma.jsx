import React from "react";
import { Canvas } from "@react-three/fiber";
import Lungs from "../models-3d-asthma/Lungs";
import Lights from "../lights-asthma/Ligths";
import { OrbitControls, Sky, SoftShadows, Sparkles, Stars } from "@react-three/drei";
import Recipe from "../models-3d-asthma/Recipe";

import { Environment } from "@react-three/drei";

const CanvasAsthma = () => {
  return (
    <Canvas
      className="canvas-asthma"
      camera={{ position: [0, 2, 7], fov: 55 }}
      shadows={true}>
      <SoftShadows frustum={3.75} size={50} near={9.5} samples={17} rings={7} />
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
      />
      
      <Lungs />
      <Lights />
      <Recipe />
      <Sparkles 
        count={200}
        size={2}
        color="#d32f2f"
        speed={0.5}
        opacity={0.6}
        scale={[10, 10, 10]}
      />

      
      
      
    </Canvas>

  );
};

export default CanvasAsthma;